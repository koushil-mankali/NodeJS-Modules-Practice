import { createSocket } from "node:dgram";

const socket = createSocket("udp4");

socket.on("message", (data, rinfo) => {
  console.log("Message:", data.toString("utf8"));

  console.log(
    "NetWork Address",
    rinfo.address,
    "NetWork Port",
    rinfo.port,
    "Family",
    rinfo.family,
    "Size",
    rinfo.size
  );
});

socket.bind({ address: "127.0.0.1", port: 8090 });

socket.on("listening", () => {
  console.log(
    `Server Started Listening @` +
      socket.address().address +
      ":" +
      socket.address().port
  );
});
