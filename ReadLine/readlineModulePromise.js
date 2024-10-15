import { createInterface, Readline } from "node:readline/promises";
import { stdin, stdout } from "process";

function completer(line) {
  const completions = ".help .error .exit .quit .q".split(" ");
  const hits = completions.filter((c) => c.startsWith(line));
  return [hits.length ? hits : completions, line];
}

const rl = createInterface({
  input: stdin,
  output: stdout,
  terminal: true,
  tabSize: 100,
  completer,
});

const rll = new Readline(stdout, { autoCommit: true });
let answer;
(async () => {
  answer = await rl.question("How how are you?\n");
  console.log("Answer: ", answer);
})();

// rll.cursorTo(0, 1);
// rll.rollback();

// rll.moveCursor(0, -1);
// rll.clearLine(0);
// console.log("Before");
// rll.clearScreenDown();
// console.log("After");
// await rll.commit();
