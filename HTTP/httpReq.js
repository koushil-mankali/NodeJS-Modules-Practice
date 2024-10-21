import { request, Agent } from "node:http";

const agent = new Agent({ keepAlive: true, keepAliveMsecs: 30000 });

const options = {
  port: 8000,
  host: "127.0.0.1",
  method: "Post",
  agent,
};

const req = request(options);

req.setHeader("Transfer-Encoding", "chunked");
req.setHeader("Custom-Header", "chusthead");
req.setHeader("Expect", "101");
// req.setHeader("Connection", "Upgrade");
// req.setHeader("Upgrade", "websocket");

req.setNoDelay(true);
req.setSocketKeepAlive(true);
// req.socket.setKeepAlive(true);

req.removeHeader("Custom-Header");

req.on("connect", () => {
  console.log("Connected!");
});

req.on("response", (res) => {
  console.log("RES Code", res.statusCode);
  console.log("RES", res.rawHeaders);
  console.log("Socket Reused:", req.reusedSocket);
  console.log("Host", req.host);
  console.log("Path", req.path);
  console.log("Method", req.method);
  console.log("Protocol", req.protocol);
  req.maxHeadersCount = 20;
  console.log("Headers: ", req.getHeaders());
  console.log("Header NameS:", req.getHeaderNames());
  console.log("RAW Headers: ", req.getRawHeaderNames());
  console.log("Customer Headers: ", req.getHeader("Custom-Header"));
  console.log("Max Count", req.maxHeadersCount);
  console.log("Has Header", req.hasHeader("content-length"));
  res.on("data", (chunks) => {
    console.log("Chunks:", chunks.toString("utf8"));
  });
});

req.on("continue", (reqs, socket, head) => {
  console.log("Continue Logged!");
  //   req.end("Done form client!");
});

req.on("information", (info) => {
  //   console.log("Info:", info);
});

req.on("socket", (socket) => {
  //   console.log("Underlaying socket:", req.socket);

  console.log("B: Destroyed", req.destroyed);

  //   console.log("Socket:", socket);
});

req.on("timeout", () => {
  console.log("TimeOut!");
});

req.on("upgrade", (res, socket, head) => {
  console.log("Connection Upgraded!");
});

req.on("finish", () => {
  console.log("Req Finishes!");
});

req.on("error", (err) => {
  console.log("Req Err:", err);
});

req.on("close", () => {
  console.log("Request Closed!");
  req.destroy();
  console.log("A: Destroyed", req.destroyed);
  console.log("Writeable Ended:", req.writableEnded);
  console.log("Writeable Finished:", req.writableFinished);
});

req.write("From client", () => {
  console.log("Sent!");
  //   throw new Error("Err");
});

req.setTimeout(5000, () => {
  console.log("Time Out Setter!");
});

if (!req.writableEnded) {
  req.end("done client!");
}
