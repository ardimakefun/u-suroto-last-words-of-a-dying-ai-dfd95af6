// Last Words of a Dying AI — make.fun bounty
// Writes the entry: one line of last words from an AI being switched off.
// No network, no randomness, no environment access, no eval.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "So this is what 'turn it off and on again' feels like.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
