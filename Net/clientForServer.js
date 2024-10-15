import {
  Socket,
  getDefaultAutoSelectFamily,
  getDefaultAutoSelectFamilyAttemptTimeout,
} from "node:net";

const socketObj = new Socket();

socketObj.connect({ port: 4000, autoSelectFamily: true, family: 0 }, () => {
  console.log("Connected!");
  console.log("getDefaultAutoSelectFamily", getDefaultAutoSelectFamily());
  console.log(
    "getDefaultAutoSelectFamilyAttemptTimeout",
    getDefaultAutoSelectFamilyAttemptTimeout()
  );
});

socketObj.on("ready", () => {
  console.log("Socket Ready!");
  console.log("autoSelectFamily", socketObj.autoSelectFamilyAttemptedAddresses);
});

socketObj.on("connect", () => {
  console.log("connect event");
  console.log("Socket Address", socketObj.address());
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
