import { describe, it, expect } from "vitest";
import { ms } from "../ms";

describe("ms", () => {
  it("should be a function", () => {
    expect(typeof ms).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => ms(null as any)).toThrow();
  });
});
