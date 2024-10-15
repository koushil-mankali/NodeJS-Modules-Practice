import { ReadStream, WriteStream, isatty } from "node:tty";

const readStream = new ReadStream(process.stdin.fd);

console.log("IsRAW", readStream.isRaw);
console.log("IsTTY", readStream.isTTY);
// console.log("==========");
// readStream.setRawMode(true);
// console.log("IsRAW", readStream.isRaw);
// console.log("==========");

// const writeStream = new WriteStream(process.stdout.fd);

// console.log("writeStream: IsTTY", writeStream.isTTY);
// console.log("==========");

// console.log("Read Stream");
// console.log("IsRAW", process.stdin.isRaw);
// console.log("IsTTY", process.stdin.isTTY);
// console.log("==========");
// process.stdin.setRawMode(true);
// console.log("IsRAW", process.stdin.isRaw);
// console.log("=====================");
// console.log("Write Stream");
// console.log("IsTTY", process.stdout.isTTY);
// console.log("=====================");

// console.log("Rows:", process.stdout.rows);
// console.log("Columns:", process.stdout.columns);

// process.stdout.on("resize", () => {
//   console.log("Resize Start");
//   console.log("Rows:", process.stdout.rows);
//   console.log("Columns:", process.stdout.columns);
// });

// process.stdout.cursorTo(1, 0);
// process.stdout.moveCursor(-0, -2);
// process.stdout.clearLine(0);
// process.stdout.clearScreenDown();
// console.log("Window", process.stdout.getWindowSize());
// console.log("Color Depth", process.stdout.getColorDepth());
// console.log("Has Color", process.stdout.hasColors(24));
// console.log("Has Color", process.stdout.hasColors(2 ** 34, { TMUX: "1" }));

// console.log("ISAtty", isatty(process.stdin.fd));
// console.log("ISAtty", isatty(8));
