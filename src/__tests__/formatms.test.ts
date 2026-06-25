import { describe, it, expect } from "vitest";
import { formatMs } from "../formatms";

describe("formatMs", () => {
  it("should be a function", () => {
    expect(typeof formatMs).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => formatMs(null as any)).toThrow();
  });
});
