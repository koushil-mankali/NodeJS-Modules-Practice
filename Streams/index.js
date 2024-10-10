import { createServer } from "node:http";
import { open } from "node:fs/promises";
// import { pipe } from "node:stream";

const server = createServer((req, res) => {
  if ((req.url = "/")) {
    (async () => {
      const fs = await open("./test.txt");
      const dest = await open("./testdest.txt");

      const data = fs.createReadStream();
      const destfile = dest.createWriteStream();

      let body = "";
      data.read;
      data.on("data", (chunk) => {
        body += chunk.toString("utf8");
      });

      data.pipe(destfile);

      data.on("drain", (err) => {
        console.log("Drained!");
      });

      data.on("close", () => {
        console.log("Closed!");
        res.end(body);
      });
      //   fs.close();
    })();
  }
});

server.listen(3000, () => {
  console.log("Server UP!");
});
