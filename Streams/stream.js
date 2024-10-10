import { Writable, setDefaultHighWaterMark, Readable } from "node:stream";
import { pipeline } from "node:stream/promises";
import { createReadStream, createWriteStream } from "node:fs";
import { readFile, writeFile } from "node:fs/promises";

const reader = createReadStream("./test.txt", {
  highWaterMark: 10 * 1024,
});
const reader2 = createReadStream("./test2.txt", {
  highWaterMark: 10 * 1024,
});
const writer = createWriteStream("./testdest.txt");

// const readableStream = Readable.from([
//   "Hi from Hyd",
//   "Hi from NZB",
//   "Hi from Hyd",
//   "Hi from NZB",
// ]);
// const readableStream = Readable.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// const readableStream = Readable.from([true, true, false, false]);
// const readableStream = Readable.from([false, false]);
// const readableStream = Readable.from([true, true]);
// const readableStream = Readable.from([reader, reader2]);
// const readableStream = Readable.from([
//   ["Hi", "from", "Hyd"],
//   ["Hi", "from", "NZB"],
// ]);

// const results = await readableStream.drop(5).toArray();
// const results = await readableStream.take(5).toArray();

// const results = await readableStream.reduce((previous, data) => {
//   return previous + data;
// }, 100);

// const results = readableStream.flatMap((chunk) => {
//   return [chunk, chunk];
// });

// const results = await readableStream.every((chunk) => chunk);

// const results = await readableStream.find((chunk) => {
//   if (chunk == "Hi from Hyd") {
//     return true;
//   }
// });

// const results = readableStream.filter((chunk) => chunk);

// const results = await readableStream.some((chunk) => chunk);

console.log("results", results);

// const results = readableStream.map(
//   (chunk) => {
//     return chunk.replaceAll("Hyd", "Bhagyanagaram").replaceAll("NZB", "Indur");
//   },
//   { concurrency: 1 }
// );

// const results = readableStream
//   .map(async (chunk) => {
//     for await (const result of chunk) {
//       return result;
//     }
//   })
//   .forEach((chunk) => {
//     console.log("chunk", chunk.toString("utf8"));
//   });

// for await (const result of results) {
//   console.log("Result", result);
// }

// async function* combineFunc(source) {
//   for await (const str of source) {
//     for await (const content of str) {
//       yield String(content).replaceAll("\r", " ").replaceAll("\n", " ");
//     }
//   }
// }

// const resultStream = Readable.from([reader, reader2]).compose(combineFunc);
// console.log("Result Stream", await resultStream.toArray());

// reader.pause();
// console.log("HighWaterMark", reader.readableHighWaterMark);
// console.log("Length", reader.readableLength);
// console.log("Object Mode", reader.readableObjectMode);
// reader.setEncoding("utf8");
// console.log("Flowing state", reader.readableFlowing);
// reader.resume();
// reader.on("readable", () => {
//   let chunk;
//   console.log("Encoding", reader.readableEncoding);
//   while (null != (chunk = reader.read())) {
//     console.log("Flowing state in", reader.readableFlowing);
//     console.log("chunk", chunk.toString("utf8"));
//   }
//   // console.log("Readable Did Read", reader.readableDidRead);
// });
// console.log("Flowing state after", reader.readableFlowing);
// console.log("Errored", reader.errored);
// console.log("Readable Ended", reader.readableEnded);
// console.log("is Paused", reader.isPaused());
// reader.resume();
// reader.destroy();
// reader.destroy(["error happend!"]);
// console.log("Readable Did Read outer", reader.readableDidRead);
// console.log("is Destroyed", reader.destroyed);
// console.log("Readable", reader.readable);

// reader.pipe(writer);
// reader.unpipe();

// reader.resume();

// let i = 0;
// reader.on("data", (chunk) => {
//   console.log("chunk!");
//   writer.write(chunk);
//   if (i == 0) {
//     i = 1;
//     console.log("i value", i);
//     reader.unshift(chunk);
//   }
//   // console.log("Flowing state in", reader.readableFlowing);
// });

// console.log("is closed", reader.closed);

// reader.on("resume", () => {
//   console.log("Resumed!");
// });
// reader.on("pause", () => {
//   console.log("Paused!");
// });

reader.on("error", (err) => {
  console.error(err);
  console.log("Errored err", reader.errored);
});
reader.on("end", () => {
  console.log("Ended!");
  // console.log("Readable Ended End", reader.readableEnded);

  // console.log("Readble Aborted Ended", reader.readableAborted);

  // console.log("Readable", reader.readable);
});
reader.on("close", () => {
  console.log("Closed!");
  // console.log("Readble Aborted Closed", reader.readableAborted);
});

// writer.setDefaultEncoding("utf8");
// writer.write("This is Start\n", "utf8");

// writer.on("pipe", () => {
//   console.log("Pipeing...");
// });

// writer.on("unpipe", () => {
//   console.log("Un Pipeing...");
// });

// console.log("HighWaterMark", writer.writableHighWaterMark);
// console.log("Writeable Object Mode", writer.writableObjectMode);
// let i = 1;
// if (writer.writable) {
//   reader.pipe(writer);
//   console.log("Writeable Need Drain", writer.writableNeedDrain);
//   writer.on("drain", () => {
//     // writer.cork();
//     console.log("chunked..", i);
//     i++;
//     // console.log("CloseStatus drain", writer.closed);
//     // console.log("Writeable before end", writer.writable);

//     // writer.end();
//     // writer.end("--------EOS-----------");

//     //   console.log("Destroyed before", writer.destroyed);
//     console.log("writableAborted before", writer.writableAborted);
//     // writer.destroy();
//     console.log("writableAborted after", writer.writableAborted);
//     // console.log("Writeable after end", writer.writable);
//     //   console.log("Destroyed after", writer.destroyed);
//   });
// } else {
//   console.log("Writeable Length", writer.writableLength);
//   console.log("Writeable Need Drain", writer.writableNeedDrain);
// }

// writer.on("close", () => {
//   console.log("Stream Completed!");
//   // console.log("CloseStatus", writer.closed);
// });

// writer.on("error", (err) => {
//   console.error(err);
// });

// writer.on("finish", () => {
//   console.log("Stream Finished!");
// });

// console.time("cal");
// await pipeline(
//   reader,
//   async function* (chunks) {
//     for await (let chunk of chunks) {
//       yield chunk.toString().replaceAll(0, "K");
//     }
//   },
//   writer
// );

// console.timeEnd("cal");

// console.time("cal");
// const data = await readFile("test.txt", { encoding: "utf8" });
// const writen = await writeFile("./testdest.txt", data);
// console.timeEnd("cal");
