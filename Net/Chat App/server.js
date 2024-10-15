import { createServer } from "node:net";
import { randomUUID } from "node:crypto";

let clientSockets = [];

const server = createServer();

// import { BlockList } from "node:net";

// const blockList = new BlockList();

// blockList.addAddress("127.0.0.1");

// console.log("Rules: ", blockList.rules);

server.on("connection", (socket) => {
  // console.log(socket.remoteAddress);
  // if (blockList.check(socket.remoteAddress)) {
  //   socket.end(`-message-User You'r Blocked!`);
  // }
  const socketId = randomUUID();

  clientSockets?.map((client) => {
    const shortUderId = socketId?.substring(0, 4);
    client.socket.write(`-message-User ${shortUderId} Joined the chat!`);
  });

  clientSockets.push({ id: socketId, socket });
  socket.write(`${socketId}-message-You'r now Connected`);
  console.log("New Client Connected");

  socket.on("data", (chunks) => {
    clientSockets?.map((clientSocket) => {
      clientSocket.socket.write(chunks);
    });
  });

  socket.on("error", () => {
    clientSockets?.map((client) => {
      const shortUderId = socketId?.substring(0, 4);
      client.socket.write(`-message-User ${shortUderId} left the chat!`);
    });
  });
});

server.listen({ host: "192.169.1.181", port: 8000 }, () => {
  console.log(`Server is On!`);
});
