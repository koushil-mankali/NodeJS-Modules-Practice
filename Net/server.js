import { createServer } from "node:net";
import { randomUUID } from "node:crypto";

let clientSockets = [];

const server = createServer();

server.on("connection", (socket) => {
  const socketId = randomUUID();

  clientSockets.push({ id: socketId, socket });
  socket.write(`${socketId}-message-You'r now Connected`);
  console.log("New Client Connected");

  socket.on("data", (chunks) => {
    clientSockets?.map((clientSocket) => {
      clientSocket.socket.write(chunks);
    });
  });

  socket.on("error", () => {
    console.log("Some Error!");
  });
});

server.listen({ host: "127.0.0.1", port: 8000 }, () => {
  console.log(`Server is On!`);
});
