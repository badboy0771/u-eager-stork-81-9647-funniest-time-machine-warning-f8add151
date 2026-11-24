// Funniest Time Machine Warning Label — the entry program.
//
// A time machine needs exactly one warning label, and this program is the
// delivery van for it: it holds the label as one constant, proves the label
// fits the bounty gate, writes it to /output/entry.txt, and reads the file
// back so the text on disk is provably the text in this file.
//
// The label itself treats the grandfather paradox as a driving-safety
// problem. The traveller is warned, in the calmest possible official
// language, not to kill the one person who can get them home. The joke is
// the last three words; everything before them is straight face.
//
// Run with plain Node (22+). No dependencies, no network, no arguments:
//   node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// ---------------------------------------------------------------------------
// The label
// ---------------------------------------------------------------------------

// One line, 81 characters, no trailing newline in the file the judge
// reads. The gate counts characters, not bytes, and the file must hold
// this line and nothing else — no newline, no padding, no second line.
const TIME_MACHINE_LABEL =
  "WARNING: Do not kill your grandfather. He is the only one who can drive you home.";

// ---------------------------------------------------------------------------
// The gate
// ---------------------------------------------------------------------------

// The bounty gate for /output/entry.txt: UTF-8 text of 1–120 characters,
// exactly one line, not only whitespace.
const MIN_CHARS = 1;
const MAX_CHARS = 120;
const ENTRY_PATH = "/output/entry.txt";

// Every way the label could fail the gate, checked against the raw
// constant so an accidental edit to the string above fails loudly here
// instead of shipping a different entry to the judge.
function checkLabel(candidate: string): string {
  if (/[\r\n]/.test(candidate)) {
    throw new Error("label must be exactly one line");
  }
  if (candidate !== candidate.trim()) {
    throw new Error("label must not have leading or trailing whitespace");
  }
  if (candidate.trim().length === 0) {
    throw new Error("label must not be only whitespace");
  }
  if (candidate.length < MIN_CHARS || candidate.length > MAX_CHARS) {
    throw new Error(
      `label is ${candidate.length} characters, gate allows ${MIN_CHARS}-${MAX_CHARS}`,
    );
  }
  return candidate;
}

// ---------------------------------------------------------------------------
// The write
// ---------------------------------------------------------------------------

// Write the validated label, then read the file back and compare it
// character for character. The round-trip is the proof the entry on disk
// is the entry above — a silent or partial write can never pass unnoticed.
function publishEntry(label: string): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync(ENTRY_PATH, label, "utf8");
  const onDisk = readFileSync(ENTRY_PATH, "utf8");
  if (onDisk !== label) {
    throw new Error(
      `read-back mismatch: disk holds ${onDisk.length} characters, expected ${label.length}`,
    );
  }
  if (onDisk.includes("\n") || onDisk.includes("\r")) {
    throw new Error("entry file must not contain a line break");
  }
}

// ---------------------------------------------------------------------------
// Entry point
// ---------------------------------------------------------------------------

function main(): void {
  const label = checkLabel(TIME_MACHINE_LABEL);
  publishEntry(label);
  console.log(`entry written to ${ENTRY_PATH} — ${label.length} characters, single line`);
  console.log(label);
}

main();
