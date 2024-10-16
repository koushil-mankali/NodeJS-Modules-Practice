import { createSocket } from "node:dgram";

const dPORT = 4000;
const dHOST = "127.0.0.1";
const mPORT = 4004;
const mHOST = "224.1.1.1";

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
  socket.setBroadcast(true);
  socket.setMulticastTTL(128);
  socket.addMembership(mHOST);
});

socket.on("message", (data, radd) => {
  console.log("Recivied Message:", data.toString("utf8"));
  console.log("RADD", radd);
});

socket.bind({ port: mPORT }, () => {
  console.log("Bineded!");
});

socket.send(MESSAGE, 0, messLength, dPORT, dHOST, (err) => {
  if (err) {
    console.log("Error Sending:", err);
  } else {
    console.log("Message Sent!");
  }
});
