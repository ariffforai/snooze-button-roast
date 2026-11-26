// Snooze Button Roast — Make.fun entry (v1)
// Writes one line roasting an alarm clock that rings at 6 AM on a Saturday
// to /output/entry.txt. Single line, no trailing newline, pure ASCII.
// Gate: 1-200 characters, single line, non-whitespace only.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "Maya's alarm rings at 6 AM on Saturday like an ex who heard she was finally sleeping in and showed up to ruin it.";

const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry out of range: ${chars} characters (must be 1-200)`);
}
// Tie-break is on bytes (smaller text wins), so gate bytes too, not just chars.
const bytes = Buffer.byteLength(LINE, "utf8");
if (bytes > 200) {
  throw new Error(`entry out of range: ${bytes} bytes (must be 1-200)`);
}
// Keep the line pure ASCII: no multi-byte surprises in the byte count.
if (!/^[\x00-\x7F]*$/.test(LINE)) {
  throw new Error("entry must be pure ASCII");
}
if (LINE.trim().length === 0) {
  throw new Error("entry is only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
// Round-trip: what we wrote must be byte-identical to the line.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LINE) {
  throw new Error("round-trip mismatch: /output/entry.txt differs from LINE");
}
console.log(`wrote ${chars} chars / ${bytes} bytes to /output/entry.txt`);
