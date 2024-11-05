import { createServer } from "node:http";
import { Buffer } from "node:buffer";
import { createReadStream } from "node:fs";

const server = createServer();

server.on("request", (req, res) => {
  req.on("data", (chunks) => {
    console.log("Chunks:", chunks.toString("utf8"));
  });

  console.log("URL", req.url);
  console.log("S: req complete", req.complete);
  console.log("req version", req.httpVersion);
  console.log("req version Maj", req.httpVersionMajor);
  console.log("req version Min", req.httpVersionMinor);

  console.log("A: WriteableEnded:", res.writableEnded);
  console.log("A: WriteableFinished:", res.writableFinished);

  res.on("close", () => {
    console.log("AC: Get-Header", res.getHeader("Content-Length"));
    console.log("C: WriteableEnded:", res.writableEnded);
    console.log("C: WriteableFinished:", res.writableFinished);
    console.log("C: Headers Sent", res.headersSent);
    console.log("Server Closed!");
  });

  res.on("finish", () => {
    console.log("AF: Get-Header", res.getHeader("Content-Length"));
    console.log("F: WriteableEnded:", res.writableEnded);
    console.log("F: WriteableFinished:", res.writableFinished);
    console.log("Response has been Sent!");
  });

  const contentToSend = Buffer.from("Hello from Server!");
  const endoftheResponse = Buffer.from("\nEnd of the Response!");

  res.setHeader(
    "Content-Length",
    contentToSend.byteLength + endoftheResponse.byteLength
  );
  res.sendDate = true;
  res.setHeader("Content-Type", "text/plain");
  res.writeHead(200, "Success", [
    "Set-Cookie",
    "name=koushil",
    "Connection",
    "Keep-Alive",
  ]);
  // res.statusCode = 200;
  // res.statusMessage = "Done";
  res.strictContentLength = true;
  console.log("B: Get-Header", res.getHeader("Content-Length"));
  console.log("Header Names[]", res.getHeaderNames());
  console.log("Headers[]", res.getHeaders());
  console.log("B: Headers Sent", res.headersSent);
  // console.log("REQ", res.req);
  // console.log("Socket", res.socket);
  res.setTimeout(1000, () => {
    console.log("Timeout set!");
  });
  if (!res.headersSent) {
    console.log("Has Header", res.hasHeader("set-cookie"));
    console.log("Remove Header", res.removeHeader("set-cookie"));
    console.log("Has Header", res.hasHeader("set-cookie"));
  }
  res.write(contentToSend);
  // const earlyHintLinks = "</styles.css>; rel=preload; as=style";
  // res.writeEarlyHints({ link: earlyHintLinks }, () => {
  //   // console.log("Early hints sent!");
  // });

  res.pipe();
  res.end(endoftheResponse, () => {
    console.log("E: req complete", req.complete);
    console.log("AE: Get-Header", res.getHeader("Content-Length"));
    console.log("Last chunk has been sent!");
  });
});

server.listen(8000, () => {
  console.log("Server Listening @ http://localhost:8000");
});
