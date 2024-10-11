import { createServer } from "node:net";

const clientSockets = [];

const server = createServer((socket) => {
  clientSockets.push(socket);

  server.on("connection", () => {
    console.log("New Client Connected");
  });

  socket.on("error", () => {
    clientSockets.filter((clientSocket) => {
      if (clientSocket == socket) {
        return false;
      }
    });
  });

  socket.on("data", (chunks) => {
    clientSockets?.map((clientSocket) => {
      clientSocket.write(chunks);
    });
  });
});

server.listen({ host: "127.0.0.1", port: 8000 }, () => {
  console.log(`Server is ON! @`, server.address());
});
