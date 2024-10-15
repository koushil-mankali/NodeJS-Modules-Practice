import {
  Socket,
  getDefaultAutoSelectFamily,
  getDefaultAutoSelectFamilyAttemptTimeout,
  isIP,
  isIPv4,
  isIPv6,
} from "node:net";

const socketObj = new Socket();
console.log("Pending Status:", socketObj.pending);
socketObj.connect({ port: 4000, autoSelectFamily: true, family: 0 }, () => {
  console.log("Pending Status:", socketObj.pending);
  console.log("Connected!", socketObj.connecting);
  console.log("getDefaultAutoSelectFamily", getDefaultAutoSelectFamily());
  console.log(
    "getDefaultAutoSelectFamilyAttemptTimeout",
    getDefaultAutoSelectFamilyAttemptTimeout()
  );
  // console.log("B: Distroyed", socketObj.destroyed);

  // socketObj.destroy();

  // console.log("A: Distroyed", socketObj.destroyed);
  // socketObj.resetAndDestroy();
});
console.log("Connecting", socketObj.connecting);
socketObj.on("ready", () => {
  console.log("Socket Ready!");
  console.log("autoSelectFamily", socketObj.autoSelectFamilyAttemptedAddresses);
});

socketObj.on("connect", () => {
  console.log("connect event");
  console.log("Local Address", socketObj.localAddress);
  console.log("Local Port", socketObj.localPort);
  console.log("Local Family", socketObj.localFamily);
  console.log("Remote Address", socketObj.remoteAddress);
  console.log("Remote Port", socketObj.remotePort);
  console.log("Remote Family", socketObj.remoteFamily);
  console.log("Socket Address", socketObj.address());
  console.log("=======================");
  console.log("IPV4", isIP("127.0.0.1"));
  console.log("IPV4", isIP("127.0000.0000.1"));
  console.log("IPV6", isIP("::"));
  console.log("IPV6", isIP("::1"));
  console.log("IPV6", isIP("0000::1"));
  console.log("IPV6", isIP("0000::1::2"));

  console.log("IPV4", isIPv4("127.0.0.1"));
  console.log("IPV4", isIPv4("127.0000.0000.1"));
  console.log("IPV6", isIPv6("::"));
  console.log("IPV6", isIPv6("::1"));
  console.log("IPV6", isIPv6("0000::1"));
  console.log("IPV6", isIPv6("0000::1::2"));
  console.log("=======================");
});

socketObj.on("data", (data) => {
  console.log("bytes Read", socketObj.bytesRead);
  console.log("bytes written", socketObj.bytesWritten);
  console.log("Socket Connected!", data.toString("utf8"));
});

// socketObj.on("lookup", (err, add, family, host) => {
//   console.log("err", err);
//   console.log("Resolved!", add, family, host);
// });

// socketObj.on("connectionAttempt", (ip, port, family) => {
//   console.log("Socket connectionAttempt!", ip, port, family);
// });
// socketObj.on("connectionAttemptFailed", (ip, port, family, err) => {
//   console.log("Socket connectionAttemptFailed!", ip, port, family, err);
// });
// socketObj.on("connectionAttemptTimeout", (ip, port, family) => {
//   console.log("Socket connectionAttemptTimeout!", ip, port, family);
// });

socketObj.on("error", (err) => {
  console.log("Error", err);
});

// socketObj.on("end", () => {
//   console.log("Socket Closed!");
// });

// socketObj.end();
// console.log("B: Distroyed", socketObj.destroyed);

// socketObj.destroy();

// console.log("A: Distroyed", socketObj.destroyed);

// socketObj.end("End of the Stream", "utf8", () => {
//   console.log("Socket Ended!");
//   socketObj.destroy();
// });
