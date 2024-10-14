import { createSocket } from "node:dgram";

const socket = createSocket({ type: "udp4", sendBufferSize: 20000 });

socket.send("Hello Their!", 8090, "127.0.0.1", (err, bytes) => {
  if (err) console.log(err);
  console.log("Bytes", bytes);

  socket.close();
});

socket.on("close", () => {
  console.log("Connection Closed!");
});
