import { createServer } from "node:net";

const server = createServer((socket) => {
  socket.on("data", (chunk) => {
    console.log("Chunk", chunk.toString("utf8"));
  });
});

server.listen(8000, "192.169.1.3", () => {
  console.log("Server is ON", server.address());
});
