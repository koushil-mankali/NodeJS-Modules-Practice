import { createSocket } from "node:dgram";

const PORT = 4000;
const HOST = "127.0.0.1";
const dPORT = 4002;
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
});

socket.on("message", (data, radd) => {
  console.log("Recivied Message:", data.toString("utf8"));
  console.log("RADD", radd);
  console.log("Address", socket.address());
  socket.close();
});

// socket.bind({ port: PORT }, () => {
//   console.log("Bineded!");
// });

socket.connect(dPORT, dHOST, () => {
  socket.send(MESSAGE, 0, messLength, (err) => {
    console.log("Rec Size", socket.getRecvBufferSize());
    console.log("Send Size", socket.getSendBufferSize());
    console.log("Send Queue bytes", socket.getSendQueueSize());
    console.log("Send Queue Count", socket.getSendQueueCount());
    console.log("Remote Add", socket.remoteAddress());
    socket.disconnect();
    if (err) {
      console.log("Error Sending:", err);
    } else {
      console.log("Message Sent!");
    }
  });
});

// socket.send(MESSAGE, 0, messLength, dPORT, dHOST, (err) => {
//   if (err) {
//     console.log("Error Sending:", err);
//   } else {
//     console.log("Message Sent!");
//   }
// });

// socket.send(MESSAGE, 0, messLength, mPORT, mHOST, (err) => {
//   if (err) {
//     console.log("Error Sending:", err);
//   } else {
//     console.log("Message Sent!");
//   }
// });
