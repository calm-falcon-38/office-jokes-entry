// Entry for make.fun's "Make the AI Judge Laugh: Office Jokes" bounty.
// Writes one office joke (a single line, under 200 characters) to entry.txt
// in the output directory, where the house gate and judge read it.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I blocked 'Focus Time' on my calendar to get some work done. Six people asked to join, so now it has an agenda, a chair, and a follow-up meeting.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
console.log(`wrote ${JOKE.length} characters to ${join(outDir, "entry.txt")}`);
