import { createServer } from "node:net";
import { createWriteStream } from "node:fs";

let fileHandle;
const server = createServer();
server.on("connection", (socket) => {
  console.log("New Connection!");

  fileHandle = createWriteStream("./storage/test.txt");

  socket.on("data", (data) => {
    const isEmpty = fileHandle.write(data);
    if (!isEmpty) {
      socket.pause();
    }
  });

  fileHandle.on("drain", () => {
    socket.resume();
  });

  socket.on("end", () => {
    console.log("Connection Ended!");
    fileHandle.close();
  });
});
server.listen("5050", "::1", () => {
  console.log("Sever is on!");
});
