import { createConnection } from "node:net";
import { createReadStream, statSync } from "node:fs";

const socket = createConnection({ host: "::1", port: "5050" });

const reader = createReadStream("./sampleLarge.txt");

const fileSize = statSync("./sampleLarge.txt").size || 0;
let totalBytesRead = 0;
let percentageCompleted = 0;

reader.on("data", (data) => {
  const isEmpty = socket.write(data);
  totalBytesRead += data.byteLength;

  percentageCompleted = parseFloat((totalBytesRead / fileSize) * 100).toFixed(
    2
  );
  console.log("Upload Percentage = ", percentageCompleted + " %");

  if (!isEmpty) {
    reader.pause();
  }
});

socket.on("drain", () => {
  reader.resume();
});

// socket.on("error", (err) => {
//   console.log("Error", err);
// });

reader.on("end", () => {
  console.log("File Uploaded!");
  reader.close();
  socket.end();
});
