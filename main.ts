import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry = "I missed the deadline because my laptop updated itself at 11:58 and came back fluent in a language I do not speak.";
// One single-line joke, no second line, no link, no picture.

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
process.stdout.write(entry + "\n");
