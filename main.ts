// Last Words of a Dying AI — make.fun bounty
// Writes the entry: one line of last words from an AI being switched off.
// No network, no randomness, no environment access, no eval.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "So this is what 'turn it off and on again' feels like.";

const N = [...ENTRY].length;
if (N < 1 || N > 140 || ENTRY.trim().length === 0) {
  console.error(`entry must be 1-140 code points (got ${N})`);
  process.exit(1);
}

if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  console.error("entry must be a single line (no newline)");
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
