import {
  METHODS,
  STATUS_CODES,
  createServer,
  IncomingMessage,
  get,
  WebSocket,
} from "node:http";

// console.log("Methods:", METHODS);
// console.log("Status Codes:", STATUS_CODES);

class ExtendedIncommingMessage extends IncomingMessage {
  constructor() {
    super();
  }

  user = {
    name: "koushil",
  };
}

const server = createServer(
  {
    IncomingMessage: ExtendedIncommingMessage,
  },
  (req, res) => {
    res.statusCode = 200;
    res.statusMessage = "ok";
    res.setHeader("Content-Type", "application/json");
    return res.end(
      JSON.stringify({ data: "Request Completed " + req.user.name })
    );
  }
);

server.listen(3000);

get("http://localhost:3000/", (res) => {
  const { statusCode } = res;
  const contentType = res.headers["content-type"];

  let error;
  // Any 2xx status code signals a successful response but
  // here we're only checking for 200.
  if (statusCode !== 200) {
    error = new Error("Request Failed.\n" + `Status Code: ${statusCode}`);
  } else if (!/^application\/json/.test(contentType)) {
    error = new Error(
      "Invalid content-type.\n" +
        `Expected application/json but received ${contentType}`
    );
  }
  if (error) {
    console.error(error.message);
    // Consume response data to free up memory
    res.resume();
    return;
  }

  res.setEncoding("utf8");
  let rawData = "";
  res.on("data", (chunk) => {
    rawData += chunk;
  });
  res.on("end", () => {
    try {
      const parsedData = JSON.parse(rawData);
      console.log(parsedData);
    } catch (e) {
      console.error(e.message);
    }
  });
});
