import { createServer } from "node:http";

const server = createServer();

server.on("request", (req, res) => {
  console.log("Came", req.rawHeaders);
  res.setHeader("Transfer-Encoding", "chunked");
  res.setHeader("Custom-Header", "chusthead");
  res.statusCode = 200;

  req.on("data", (chunks) => {
    console.log("DATA:", chunks.toString("utf8"));
  });

  res.end("came!");

  // server.close();
  // server.closeAllConnections();
  // server.closeIdleConnections();
});

server.on("close", () => {
  console.log("Server Closed!");
});

server.on("upgrade", () => {
  console.log("Upgrade Request!");
});

server.on("connect", () => {
  console.log("Connection Request!");
});

server.on("checkContinue", (req, res) => {
  console.log("CAME EVENET");

  // res.writeContinue();
  // res.end("done!!!");
});

server.on("dropRequest", () => {
  console.log("Requests Dropped!");
});

server.on("checkExpectation", (req, res) => {
  console.log("other than 100");
});

server.on("clientError", (err, socket) => {
  server.headersTimeout = 1;
  console.log("Err", err);
  socket.end("Connection Closed by Server!");
});

server.requestTimeout = 100;

server.on("timeout", () => {
  console.log("Time outedd!");
});

server.listen(8000, "127.0.0.1", () => {
  server.maxRequestsPerSocket = 10;
  server.maxHeadersCount = 2;
  console.log("Max:", server.maxRequestsPerSocket);
  console.log("listening...", server.listening);
  console.log("HeadersCount...", server.maxHeadersCount);

  server.setTimeout(500, () => {
    console.log("Timeout set!");
  });

  console.log("Timeout", server.timeout);
  server.keepAliveTimeout = 100;
});
// server.close();
