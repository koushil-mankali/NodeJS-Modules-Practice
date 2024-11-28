import { connect } from "node:http2";
import { readFileSync } from "node:fs";

const client = connect("https://localhost:8443/", {
  ca: readFileSync("public.pem", "utf8"),
});

const req = client.request({ path: "/" });

req.setEncoding("utf8");

req.on("response", (headers, flags) => {
  console.log("headers", headers);
  console.log("Flags", flags);
});

req.on("data", (data) => {
  console.log("DATA", data);
});

req.on("error", (err) => {
  console.log("Error Occ:", err);
});

client.on("error", (err) => {
  console.log("Error Occ:", err);
});

client.close();
req.end();
