export function formatMs(ms: number): string {
  if (ms < 0) throw new Error("Milliseconds must be non-negative");
  if (ms === 0) return "0ms";
  const units: [number, string][] = [[604800000, "w"], [86400000, "d"], [3600000, "h"], [60000, "m"], [1000, "s"]];
  for (const [val, label] of units) {
    if (ms >= val) return Math.floor(ms / val) + label;
  }
  return ms + "ms";
}
