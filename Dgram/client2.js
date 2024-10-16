import { createSocket } from "node:dgram";

const PORT = 4002;
const HOST = "127.0.0.1";

const MESSAGE = "Hi from server!";
const messLength = MESSAGE.length || 0;

const socket = createSocket({
  type: "udp4",
});

socket.on("error", (err) => {
  console.log("Error = ", err);
});

socket.on("close", (err) => {
  if (err) console.log("Errorclose", err);

  console.log("Socket Closed");
});

socket.on("connect", (radd) => {
  console.log("Connected!", radd);
});

socket.on("listening", () => {
  console.log("Listening...");
});

socket.on("message", (data, radd) => {
  console.log("Recivied Message:", data.toString("utf8"));
  console.log("RADD", radd);
});

socket.bind({ port: PORT, address: HOST }, () => {
  console.log("Bineded!");
});

socket.send(MESSAGE, 0, messLength, PORT, HOST, (err) => {
  if (err) {
    console.log("Error Sending:", err);
  } else {
    console.log("Message Sent!");
  }
});
