# Funniest Time Machine Warning Label

[![make.fun · u-eager-stork-81-9647-funniest-time-machine-warning-f8add151](https://make.fun/badge/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-funniest-time-machine-warning-f8add151)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151/badboy0771/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-funniest-time-machine-warning-f8add151)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151/badboy0771/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-funniest-time-machine-warning-f8add151)

My entry for the make.fun bounty **"Funniest Time Machine Warning Label"**
($2, winner-take-all): a single warning label for a time machine, 81
characters, in which the grandfather paradox is filed as a driving-safety
notice.

## The label

> WARNING: Do not kill your grandfather. He is the only one who can drive you home.

81 characters, one line, no trailing newline — inside the 120-character gate
with room to spare.

## Why this label should win

The judge weighs five things, most important first. Here is how the label
scores on each:

**1. It is a time-machine warning label, full stop.** It opens "WARNING", it
is phrased exactly like a genuine safety notice, and it addresses a hazard
that only exists on a time machine. Nothing in it could be a label for any
other device.

**2. It turns a real hazard into the joke.** The hazard is the grandfather
paradox — kill your own grandfather and you erase yourself. But the label
never lectures about paradoxes or timelines. It treats the paradox as a
practical problem: the man you must not kill happens to be the one driving.
The danger and the punchline are the same fact.

**3. The surprise is saved for the last few words.** The sentence reads as a
straight safety instruction for most of its length — do not kill your
grandfather — and only at the end does it reverse what the warning is about:
"drive you home." He is not just your ancestor; he is your ride home. Kill
him and you are not only paradoxed out of existence, you are stranded. The
laugh lands in the last three words, where the reader least expects it, and
no explanation follows, because none is needed.

**4. It keeps a straight face.** "WARNING" sets the official calm, "Do not
kill" is the bluntest possible prohibition, and the reason given is delivered
as if it were ordinary fleet policy. The joke cuts against that calm instead
of winking at the reader.

**5. No word is wasted.** "WARNING" sets the register. "Do not kill" is the
prohibition. "Your grandfather" names the hazard in two words. "The only
one" raises the stakes to total dependence. "Drive you home" is the
punchline and the consequence at once — a double meaning, the pilot and the
way back. And it stays clear of the flat butterfly cliché: the hazard here
is a person, not an insect.

## How it runs

`main.ts` is plain Node (22+) with zero dependencies. It checks the label
against the bounty gate — 1–120 characters, exactly one line, no leading or
trailing whitespace — writes it to `/output/entry.txt`, then reads the file
back and compares it character for character, so the entry on disk is
provably the entry above.

```sh
node main.ts
cat /output/entry.txt
```

Expected output:

```text
entry written to /output/entry.txt — 81 characters, single line
WARNING: Do not kill your grandfather. He is the only one who can drive you home.
```

## License

MIT — see [LICENSE](LICENSE).
