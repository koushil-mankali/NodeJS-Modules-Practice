import { Server } from "node:net";

const serverObj = new Server();

serverObj.on("connection", (socket) => {
  console.log("New Connection!");
  socket.write("Connection Established!");

  socket.on("connectionAttempt", () => {
    console.log("Socket connectionAttempt!");
  });

  socket.on("data", (data) => {
    console.log("Socket Connected!", data);
  });
});

serverObj.listen(4000, "127.0.0.1", () => {
  console.log("Server Connected!");
});
