import { describe, expect, it, vi, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock the database functions
vi.mock("./db", () => ({
  createDemoSubmission: vi.fn(),
  getDemoSubmissions: vi.fn(),
}));

// Mock the notification function
vi.mock("./_core/notification", () => ({
  notifyOwner: vi.fn(),
}));

import { createDemoSubmission, getDemoSubmissions } from "./db";
import { notifyOwner } from "./_core/notification";

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: vi.fn(),
    } as unknown as TrpcContext["res"],
  };
}

describe("demo.submit", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("successfully submits a demo request with all fields", async () => {
    const mockSubmission = {
      id: 1,
      name: "John Smith",
      email: "john@council.gov.au",
      organisation: "Melbourne City Council",
      product: "GrantMaestro" as const,
      message: "Interested in grant management",
      status: "new" as const,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    vi.mocked(createDemoSubmission).mockResolvedValue(mockSubmission);
    vi.mocked(notifyOwner).mockResolvedValue(true);

    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.demo.submit({
      name: "John Smith",
      email: "john@council.gov.au",
      organisation: "Melbourne City Council",
      product: "GrantMaestro",
      message: "Interested in grant management",
    });

    expect(result.success).toBe(true);
    expect(result.message).toContain("Thank you");
    expect(createDemoSubmission).toHaveBeenCalledWith({
      name: "John Smith",
      email: "john@council.gov.au",
      organisation: "Melbourne City Council",
      product: "GrantMaestro",
      message: "Interested in grant management",
    });
    expect(notifyOwner).toHaveBeenCalled();
  });

  it("successfully submits with only required fields", async () => {
    const mockSubmission = {
      id: 2,
      name: "Jane Doe",
      email: "jane@example.com",
      organisation: null,
      product: null,
      message: null,
      status: "new" as const,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    vi.mocked(createDemoSubmission).mockResolvedValue(mockSubmission);
    vi.mocked(notifyOwner).mockResolvedValue(true);

    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.demo.submit({
      name: "Jane Doe",
      email: "jane@example.com",
    });

    expect(result.success).toBe(true);
    expect(createDemoSubmission).toHaveBeenCalledWith({
      name: "Jane Doe",
      email: "jane@example.com",
      organisation: null,
      product: null,
      message: null,
    });
  });

  it("returns error when database fails to save", async () => {
    vi.mocked(createDemoSubmission).mockResolvedValue(null);

    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.demo.submit({
      name: "Test User",
      email: "test@example.com",
    });

    expect(result.success).toBe(false);
    expect(result.error).toContain("Failed to save");
  });

  it("validates email format", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.demo.submit({
        name: "Test User",
        email: "invalid-email",
      })
    ).rejects.toThrow();
  });

  it("validates name is required", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.demo.submit({
        name: "",
        email: "test@example.com",
      })
    ).rejects.toThrow();
  });

  it("validates product enum values", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.demo.submit({
        name: "Test User",
        email: "test@example.com",
        product: "InvalidProduct" as any,
      })
    ).rejects.toThrow();
  });
});

describe("demo.list", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("returns list of demo submissions", async () => {
    const mockSubmissions = [
      {
        id: 1,
        name: "John Smith",
        email: "john@council.gov.au",
        organisation: "Melbourne City Council",
        product: "GrantMaestro" as const,
        message: null,
        status: "new" as const,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: "Jane Doe",
        email: "jane@example.com",
        organisation: null,
        product: null,
        message: null,
        status: "contacted" as const,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    vi.mocked(getDemoSubmissions).mockResolvedValue(mockSubmissions);

    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.demo.list();

    expect(result).toHaveLength(2);
    expect(result[0].name).toBe("John Smith");
    expect(result[1].name).toBe("Jane Doe");
  });

  it("returns empty array when no submissions exist", async () => {
    vi.mocked(getDemoSubmissions).mockResolvedValue([]);

    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.demo.list();

    expect(result).toHaveLength(0);
  });
});
