// One Line, One Laugh — entry program (Node 22, stdlib only).
// Writes exactly one funny line to $MAKEFUN_OUTPUT_DIR/entry.txt,
// validates the competition gate (UTF-8, 1-200 chars, not only
// whitespace), then reads the file back to verify byte-for-byte.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Revised after the first run (101 chars): dropped "tried to" for a
// tighter setup — every word earns its place and the turn lands faster.
const ENTRY =
  "The funeral director upsold me the premium coffin, as if I'd be around to enjoy the upgrade.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");

writeFileSync(outPath, ENTRY, "utf8");

// Gate validation: the sealed scorer checks UTF-8 text of 1-200
// characters, not only whitespace. The entry must also be exactly one
// line: no newline characters anywhere, and no trailing newline, so the
// byte count stays small (the tie-break favours fewer bytes).
const written = readFileSync(outPath, "utf8");
const byteLength = Buffer.byteLength(written, "utf8");
if (written.length < 1 || written.length > 200) {
  throw new Error(`gate failed: entry is ${written.length} chars (need 1-200)`);
}
if (byteLength !== written.length) {
  throw new Error("gate failed: entry is not plain ASCII");
}
if (written.includes("\n") || written.includes("\r")) {
  throw new Error("gate failed: entry is not a single line");
}
if (written.trim().length === 0) {
  throw new Error("gate failed: entry is only whitespace");
}
if (written !== ENTRY) {
  throw new Error("verification failed: file does not match the entry");
}
console.log(`entry written (${written.length} chars, ${byteLength} bytes): ${written}`);
