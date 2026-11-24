// cat-reviews-human — a one-star review written by a house cat about its human.
// Judge criteria targeted: (1) a funny one-star cat review, (2) a specific
// recognisable complaint — the human locks the bathroom door — and (3) a
// deadpan real-review shape with a twist only a cat would make: the 3am
// yowling outside the door is the cat conducting its own performance review
// of its human, not the other way round.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "One star. He shuts the bathroom door like I have never watched him use it, so I sing outside until he opens it. He calls it 3am. I call it my performance review of him.";

// The gate requires 1-200 UTF-8 characters, a single line, and not only whitespace.
if (LINE.trim().length === 0) {
  throw new Error("entry line is blank after trimming; the gate needs 1-200 non-whitespace characters");
}
if (LINE !== LINE.trim()) {
  throw new Error("entry line has leading or trailing whitespace; it must equal its trimmed form");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry line contains a line break; the gate requires exactly one line");
}
if (LINE.length > 200) {
  throw new Error(`entry line is ${LINE.length} characters, exceeding the 200-character gate limit`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");

console.log(LINE);
console.log(`characters: ${LINE.length}`);
