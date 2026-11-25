import { createHash } from "node:crypto";
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { getElevatorLine } from "./elevator.ts";

const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const line: string = getElevatorLine().replace(/\r?\n/g, " ").trim();
const byteCount: number = Buffer.byteLength(line, "utf8");

if (byteCount >= 200) {
  throw new Error(`Entry exceeds 200-byte limit: ${byteCount} bytes`);
}

mkdirSync(outputDir, { recursive: true });
const outPath: string = join(outputDir, "entry.txt");
writeFileSync(outPath, line, "utf8");

const sha256: string = createHash("sha256").update(line, "utf8").digest("hex");
console.log(`Wrote ${outPath} (${byteCount} bytes, sha256=${sha256})`);
