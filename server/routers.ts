import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { 
  createDemoSubmission, 
  getDemoSubmissions, 
  getDemoSubmissionById,
  updateDemoSubmissionStatus,
  deleteDemoSubmission,
  type DemoSubmissionStatus 
} from "./db";
import { notifyOwner } from "./_core/notification";

// Input validation schema for demo submissions
const demoSubmissionSchema = z.object({
  name: z.string().min(1, "Name is required").max(255),
  email: z.string().email("Valid email is required").max(320),
  organisation: z.string().max(255).optional(),
  product: z.enum(["GrantMaestro", "Wellness App", "GrantThrive", "Multiple Products"]).optional(),
  message: z.string().max(2000).optional(),
});

// Status update schema
const statusUpdateSchema = z.object({
  id: z.number().int().positive(),
  status: z.enum(["new", "contacted", "converted", "closed"]),
});

export const appRouter = router({
  // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // Demo submission router
  demo: router({
    submit: publicProcedure
      .input(demoSubmissionSchema)
      .mutation(async ({ input }) => {
        try {
          // Create the submission in the database
          const submission = await createDemoSubmission({
            name: input.name,
            email: input.email,
            organisation: input.organisation || null,
            product: input.product || null,
            message: input.message || null,
          });

          if (!submission) {
            return {
              success: false,
              error: "Failed to save submission. Please try again.",
            };
          }

          // Notify the owner about the new demo request
          const productText = input.product || "Not specified";
          const orgText = input.organisation || "Not specified";
          const messageText = input.message || "No message provided";

          await notifyOwner({
            title: `New Demo Request: ${input.name}`,
            content: `
**New Demo Request Received**

**Name:** ${input.name}
**Email:** ${input.email}
**Organisation:** ${orgText}
**Interested In:** ${productText}

**Message:**
${messageText}

---
*Submitted via Big Little Business website*
            `.trim(),
          });

          return {
            success: true,
            message: "Thank you for your interest! We'll be in touch within 24 hours.",
            product: input.product || null,
          };
        } catch (error) {
          console.error("[Demo Submission] Error:", error);
          return {
            success: false,
            error: "An unexpected error occurred. Please try again later.",
          };
        }
      }),

    // Admin endpoint to view submissions (protected - requires login)
    list: protectedProcedure.query(async () => {
      return getDemoSubmissions();
    }),

    // Get single submission by ID
    getById: protectedProcedure
      .input(z.object({ id: z.number().int().positive() }))
      .query(async ({ input }) => {
        return getDemoSubmissionById(input.id);
      }),

    // Update submission status
    updateStatus: protectedProcedure
      .input(statusUpdateSchema)
      .mutation(async ({ input }) => {
        try {
          const updated = await updateDemoSubmissionStatus(
            input.id, 
            input.status as DemoSubmissionStatus
          );
          
          if (!updated) {
            return {
              success: false,
              error: "Failed to update submission status.",
            };
          }

          return {
            success: true,
            submission: updated,
          };
        } catch (error) {
          console.error("[Demo Status Update] Error:", error);
          return {
            success: false,
            error: "An unexpected error occurred.",
          };
        }
      }),

    // Delete submission
    delete: protectedProcedure
      .input(z.object({ id: z.number().int().positive() }))
      .mutation(async ({ input }) => {
        try {
          const deleted = await deleteDemoSubmission(input.id);
          
          return {
            success: deleted,
            error: deleted ? undefined : "Failed to delete submission.",
          };
        } catch (error) {
          console.error("[Demo Delete] Error:", error);
          return {
            success: false,
            error: "An unexpected error occurred.",
          };
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
