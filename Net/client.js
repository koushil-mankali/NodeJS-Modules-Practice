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

const ask = async (socket) => {
  const userEntry = await rl.question("Enter a Messages:");
  socket.write(userEntry);
  await moveCursor(0, -1);
  await clearLine(0);
};

const socket = createConnection({ host: "127.0.0.1", port: 8000 }, async () => {
  ask(socket);

  socket.on("data", async (chunks) => {
    console.log();
    await moveCursor(0, -1);
    await clearLine(0);
    console.log("Recivied: ", chunks?.toString("utf8"));
    ask(socket);
  });
});

socket.on("end", () => {
  console.log("Server Closed!");
});
