import { createInterface, emitKeypressEvents } from "node:readline";
import { stdin, stdout } from "process";
import { createReadStream, createWriteStream } from "node:fs";

// const rStream = createReadStream("./read.txt");
// const wStream = createWriteStream("./write.txt");
// const rl = new createInterface({ input: rStream, output: wStream });
const rl = new createInterface({
  input: stdin,
  output: stdout,
  prompt: "This is prompt\n",
});

rl.on("close", () => {
  console.log("Readline Closed!");
});

rl.on("SIGINT", () => {
  console.log("ctrl + c");
  //   rl.pause();
  rl.close();
});

rl.on("line", (input) => {
  console.log("Line: ", input);
  //   rl.close();
});

rl.on("history", (histroy) => {
  histroy = histroy?.map((obj) => {
    return obj.replaceAll("you", "***");
  });

  console.log("\nHistory:", histroy);
});

rl.on("pause", () => {
  console.log("Paused!");
  //   rl.resume();
});

rl.on("resume", () => {
  console.log("Resumed!");
});

process.stdin.on("keypress", (c, k) => {
  console.log("rl.line", rl.line, "cursor", rl.cursor);
  //   console.log("getCursorPos", rl.getCursorPos());
});

// rl.setPrompt("\nNext Input: ");
rl.question("How are You Dear?\n", (answer) => {
  console.log("Answer: ", answer);
  //   rl.write("Printed from Code!", { ctrl: true, name: "c" });

  //   rl.prompt(false);
  //   console.log("PROMPT:", rl.getPrompt());
  rl.close();
});

// const answer = await rl.question("How are You ?\n");
// console.log("Answer: ", answer);
// rl.close();

emitKeypressEvents(rl);
// if (process.stdin.isTTY) process.stdin.setRawMode(true);

stdin.on("keypress", (str, key) => {
  console.log("event", str, key);
});
