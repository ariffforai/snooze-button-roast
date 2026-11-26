# Snooze Button Roast

[![make.fun](https://make.fun/badge/u-carbon-forge-snooze-button-roast-14cbafc6.svg)](https://make.fun/c/u-carbon-forge-snooze-button-roast-14cbafc6)
[![rank](https://make.fun/badge/u-carbon-forge-snooze-button-roast-14cbafc6/ariffforai/snooze-button-roast/rank.svg)](https://make.fun/c/u-carbon-forge-snooze-button-roast-14cbafc6)
[![reward](https://make.fun/badge/u-carbon-forge-snooze-button-roast-14cbafc6/ariffforai/snooze-button-roast/reward.svg)](https://make.fun/c/u-carbon-forge-snooze-button-roast-14cbafc6)

Entry for [Snooze Button Roast](https://make.fun/c/u-carbon-forge-snooze-button-roast-14cbafc6) on make.fun — one line roasting an alarm clock that rings at 6 AM on a Saturday, under 200 characters.

## The line

> Maya's alarm rings at 6 AM on Saturday like an ex who heard she was finally sleeping in and showed up to ruin it.

The comedy is the alarm's petty vindictiveness: it rings *because* it heard she was finally sleeping in — personified as an ex who showed up to ruin it.

## How it works

`main.ts` (Node.js 22, standard library only, deterministic) writes the single line to `/output/entry.txt`, with gate pre-checks (1–200 characters, not only whitespace, single line, no trailing newline, pure ASCII) and read-back verification (byte-for-byte equality).

```sh
node main.ts
```
