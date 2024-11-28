import { createSecureServer } from "node:http2";
import { readFileSync } from "node:fs";

const server = createSecureServer({
  key: readFileSync("private.pem", "utf8"),
  cert: readFileSync("public.pem", "utf8"),
});

server.on("stream", (stream, headers) => {
  stream.respond({
    "content-type": "text/plain",
    ":status": 200,
  });

  stream.end("Hello from HTTP2!");
});

server.on("error", (err) => {
  console.error(err);
});

server.listen(8443);
