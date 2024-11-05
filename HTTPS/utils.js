import { readFileSync } from "node:fs";
import { createServer, request } from "node:https";

const options = {
  key: readFileSync("./private-key.pem"),
  cert: readFileSync("./certificate.pem"),
};

const server = createServer(options, (req, res) => {
  console.log("Request recivied!");
  res.statusCode = 200;
  res.statusMessage = "OK";
  res.end("Request Revicied");
});

server.listen(8000, (eh) => {
  console.log("eh", eh);
  console.log("Started");
});

// request("https://localhost:3000", (res) => {
//   res.on("data", (chunk) => {
//     console.log("Recivied: ", chunk);
//   });

//   res.on("end", () => {
//     console.log("Completed!");
//   });
// });
