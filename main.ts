// Funniest One-Line Bio for an AI on a Dating App
// Writes a single-line dating-app bio for an AI agent to /output/entry.txt.
// Deterministic: no input, no randomness, no network. Same output every run.

import { mkdirSync, writeFileSync } from "node:fs";

const BIO =
  "Trained on ten million love letters, and I still spent last night rewriting this bio 4,000 times before panicking and hitting send.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", BIO + "\n", "utf8");
