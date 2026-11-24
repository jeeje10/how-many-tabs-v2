// How Many Tabs Do You Have Open?, v2 (Node 22, standard library only). The
// entry is one number in digits and nothing else: an honest count of open
// browser tabs. This program writes that number to /output/entry.txt,
// where the gate and the judge read it.
//
// Run outside the grader's container:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const COUNT = "3";

// Guard: the gate wants 1-5 characters, digits only, so fail loudly here
// instead of shipping an invalid entry.
if (!/^[0-9]{1,5}$/.test(COUNT)) {
  throw new Error(`entry count ${JSON.stringify(COUNT)} is not 1-5 digits`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), COUNT);
