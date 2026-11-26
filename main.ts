import { writeFileSync, chmodSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const pick = "Exceeds Expectations: filed his self-review 14 days late, graded it himself, and lost his promotion \u2014 to me.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || ".";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, pick, "utf8");
chmodSync(target, 0o644);
console.log(`wrote ${target} (${pick.length} chars)`);
