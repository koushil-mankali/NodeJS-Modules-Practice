import { Server } from "node:net";

const serverObj = new Server();

// serverObj.maxConnections = 1;

serverObj.on("connection", (socket) => {
  console.log("New Connection!");

  serverObj.getConnections((err, cnt) => {
    console.log("Count", cnt);
  });

  console.log("listening bool", serverObj.listening);
});

serverObj.on("error", (error) => {
  console.log("ServerObj Error!", error);
});

serverObj.listen(4000, "127.0.0.1", () => {
  console.log("ServerObj Started!", serverObj.address());
});

serverObj.on("listening", () => {
  console.log("Listen Event!");
});

serverObj.on("close", () => {
  console.log("ServerObj Closed!");
});

serverObj.on("drop", (data) => {
  console.log("Drop Event", data);
});

// setTimeout(() => {
//   serverObj.close((err) => {
//     if (err) console.log("ER", err);
//     console.log("close called");
//   });
//   console.log("time out");
// }, 3000);
