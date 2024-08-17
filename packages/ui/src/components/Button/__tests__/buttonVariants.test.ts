import { describe, expect, it } from "vitest";
import { buttonVariants } from "../buttonVariants";

describe("buttonVariants", () => {
  it("should return the default variant", () => {
    const classes = buttonVariants({ variant: "default" });
    expect(classes).toContain("dark:bg-slate-800");
  });
  it("should return the primary variant", () => {
    const classes = buttonVariants({ variant: "primary" });
    expect(classes).toContain("dark:bg-primary");
  });
  it("should return the destructive variant", () => {
    const classes = buttonVariants({ variant: "destructive" });
    expect(classes).toContain("bg-destructive");
  });
  it("should return the info variant", () => {
    const classes = buttonVariants({ variant: "info" });
    expect(classes).toContain("bg-info");
  });
  it("should return the outline variant", () => {
    const classes = buttonVariants({ variant: "outline" });
    expect(classes).toContain("border-input");
  });
});
