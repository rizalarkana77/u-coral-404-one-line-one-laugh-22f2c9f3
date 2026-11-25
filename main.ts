// One Line, One Laugh — entry program (Node 22, stdlib only).
// Writes exactly one funny line to $MAKEFUN_OUTPUT_DIR/entry.txt, then
// validates the competition gate and reads the file back to verify it
// byte-for-byte before reporting success.
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

// Gate validation, one named check at a time so a failure says exactly
// which rule broke: UTF-8 text of 1-200 characters, a single line with
// no newline anywhere (and no trailing newline, so the byte count stays
// small for the fewer-bytes tie-break), no leading or trailing
// whitespace, and plain ASCII so chars and bytes agree.
function checkGate(text: string): string[] {
  const problems: string[] = [];
  if (text.length < 1 || text.length > 200) {
    problems.push(`length ${text.length} chars (need 1-200)`);
  }
  if (Buffer.byteLength(text, "utf8") !== text.length) {
    problems.push("not plain ASCII (chars and bytes disagree)");
  }
  if (text.includes("\n") || text.includes("\r")) {
    problems.push("not a single line (newline found)");
  }
  if (text.trim().length === 0) {
    problems.push("only whitespace");
  }
  if (text !== text.trim()) {
    problems.push("leading or trailing whitespace");
  }
  return problems;
}

const written = readFileSync(outPath, "utf8");
const problems = checkGate(written);
if (problems.length > 0) {
  throw new Error(`gate failed: ${problems.join("; ")}`);
}
if (written !== ENTRY) {
  throw new Error("verification failed: file does not match the entry");
}
const words = written.split(/\s+/).length;
console.log(
  `entry written (${written.length} chars, ${Buffer.byteLength(written, "utf8")} bytes, ${words} words): ${written}`,
);
