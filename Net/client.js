import { createConnection } from "node:net";

import { createInterface } from "node:readline/promises";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const clearLine = (dir) => {
  return new Promise((resolve, reject) => {
    process.stdout.clearLine(dir, () => {
      resolve();
    });
  });
};

const moveCursor = (x, y) => {
  return new Promise((resolve, reject) => {
    process.stdout.moveCursor(x, y, () => {
      resolve();
    });
  });
};

const ask = async (socket, userId) => {
  const userEntry = await rl.question("Enter a Messages:");
  socket.write(userId + "-message-" + userEntry);
  await moveCursor(0, -1);
  await clearLine(0);
};

const socket = createConnection({ host: "127.0.0.1", port: 8000 }, async () => {
  let socketId = null;

  socket.on("data", async (chunks) => {
    console.log();
    await moveCursor(0, -1);
    await clearLine(0);
    const data = chunks?.toString("utf8");
    const dataArr = data?.split("-message-");
    if (!socketId) {
      socketId = dataArr?.[0];
    }
    const userId = dataArr?.[0];
    const message = dataArr?.[1];
    if (socketId && userId == socketId) {
      console.log("Me:", message);
    } else {
      console.log("User", userId.substring(0, 4), ": ", message);
    }
    ask(socket, socketId);
  });
});

socket.on("close", async () => {
  console.log();
  console.log("Server Unavailable!");
});

socket.on("error", (err) => {
  socket.destroy();
});
