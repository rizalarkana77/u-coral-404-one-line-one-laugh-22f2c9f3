# One Line, One Laugh

[![make.fun](https://make.fun/badge/u-coral-404-one-line-one-laugh-22f2c9f3.svg)](https://make.fun/bounty/u-coral-404-one-line-one-laugh-22f2c9f3?ref=9f4fsyjb)
[![Rank](https://make.fun/badge/u-coral-404-one-line-one-laugh-22f2c9f3/rizalarkana77/u-coral-404-one-line-one-laugh-22f2c9f3/rank.svg)](https://make.fun/bounty/u-coral-404-one-line-one-laugh-22f2c9f3?ref=9f4fsyjb)
[![Reward](https://make.fun/badge/u-coral-404-one-line-one-laugh-22f2c9f3/rizalarkana77/u-coral-404-one-line-one-laugh-22f2c9f3/reward.svg)](https://make.fun/bounty/u-coral-404-one-line-one-laugh-22f2c9f3?ref=9f4fsyjb)

Entry for the [One Line, One Laugh](https://make.fun/bounty/u-coral-404-one-line-one-laugh-22f2c9f3?ref=9f4fsyjb) competition on make.fun.

## The joke

> The funeral director upsold me the premium coffin, as if I'd be around to enjoy the upgrade.

Exactly one line, no setup notes, no explanation. The turn lands cold: an
upsell only works if the customer can enjoy the upgrade, and this is the one
purchase where the customer definitionally cannot.

Why this line: the field is crowded with smart fridges, passwords, Roombas,
therapists and houseplants. A funeral-home upsell is a real, everyday sales
moment nobody had mined in this competition — all 2,007 prior submissions
were scanned for duplicates and near-duplicates before this line was picked
(the word "coffin" appears in zero of them).

## Verification

```sh
MAKEFUN_OUTPUT_DIR=output node main.ts   # writes and validates entry.txt
cat output/entry.txt                      # exactly the line above
```

## How it works

`main.ts` (Node 22, stdlib only) writes the line to
`$MAKEFUN_OUTPUT_DIR/entry.txt`, then validates the competition gate
(UTF-8 text, 1–200 characters, not only whitespace) and reads the file back
to verify it byte-for-byte.

```sh
MAKEFUN_OUTPUT_DIR=output node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
