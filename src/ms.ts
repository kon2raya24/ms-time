export function ms(str: string): number {
  const match = str.match(/^(\d+)\s*(ms|s|m|h|d|w)$/);
  if (!match) throw new Error("Invalid format. Use: 100ms, 5s, 10m, 2h, 1d, 1w");
  const val = parseInt(match[1]);
  const units: Record<string, number> = { ms: 1, s: 1000, m: 60000, h: 3600000, d: 86400000, w: 604800000 };
  return val * units[match[2]];
}
