import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { createDemoSubmission, getDemoSubmissions } from "./db";
import { notifyOwner } from "./_core/notification";

// Input validation schema for demo submissions
const demoSubmissionSchema = z.object({
  name: z.string().min(1, "Name is required").max(255),
  email: z.string().email("Valid email is required").max(320),
  organisation: z.string().max(255).optional(),
  product: z.enum(["GrantMaestro", "Wellness App", "GrantThrive", "Multiple Products"]).optional(),
  message: z.string().max(2000).optional(),
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
          };
        } catch (error) {
          console.error("[Demo Submission] Error:", error);
          return {
            success: false,
            error: "An unexpected error occurred. Please try again later.",
          };
        }
      }),

    // Admin endpoint to view submissions (protected in real app)
    list: publicProcedure.query(async () => {
      return getDemoSubmissions();
    }),
  }),
});

export type AppRouter = typeof appRouter;
