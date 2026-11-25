// Famous Last Words: The Funniest Epitaph
// Entry program for the make.fun competition
// u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406
//
// Writes one line of famous last words — a tombstone epitaph of at most
// 150 characters — to /output/entry.txt.
//
// Candidate lines considered, judged against the published brief:
// 1) a one-line epitaph of famous last words, 2) a real laugh on one
// read, 3) a surprise or twist, 4) reads like carved stone,
// 5) quotable enough to repeat to a friend:
//   A. "I told them the ladder was fine. It was not."
//   B. "I died doing what I loved: pressing 'remind me later.'"
//   C. "He died as he lived: mid-sentence, and-"
//   D. "I spent my life dodging spoilers. Death spoiled the ending."
//   E. "Here lies the man who finally read the terms and conditions."
//   F. "I asked for one more minute. Death declined."
//
// Winner: A. First-person dying speech, a genuine joke built on irony
// rather than a mild pun, a clean two-beat twist ("It was not."),
// stone-short at 44 characters, and quotable in one breath. The
// others lose on at least one count: B is a good joke but softer and
// longer; C is third-person narration, not dying speech; D needs a
// beat too long to land; E is a punchline about paperwork, not last
// words; F leans on personification instead of a twist.
//
// The output is fully deterministic: the same bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "I told them the ladder was fine. It was not.";
const OUTPUT_PATH = "/output/entry.txt";
const MAX_CHARS = 150;

function main(): void {
  const text = ENTRY.trim();

  if (text.length === 0 || text.length > MAX_CHARS) {
    throw new Error(
      `Entry must be 1 to ${MAX_CHARS} characters, got ${text.length}.`,
    );
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("Entry must be a single line.");
  }
  if (text !== ENTRY) {
    throw new Error("Entry changed during trimming; refusing to write.");
  }

  mkdirSync("/output", { recursive: true });
  writeFileSync(OUTPUT_PATH, text, "utf8");
  console.log(`Wrote ${text.length} characters to ${OUTPUT_PATH}`);
  console.log(`Entry: ${text}`);
}

main();
