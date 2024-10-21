import { Agent, request } from "node:http";
// import { Agent, request } from "node:https";

const agent = new Agent({
  keepAlive: true,
  //   keepAliveMsecs: 5000,
  maxSockets: 10,
  maxFreeSockets: 1,
  maxTotalSockets: 10,
  scheduling: "lifo",
  //   timeout: 8000,
  host: "127.0.0.1",
});

console.log("B: Free Sockets", agent.freeSockets);
console.log("B: Max Sockets", agent.maxSockets);
console.log("B: Max Free Sockets", agent.maxFreeSockets);
console.log("B: Total Sockets", agent.maxTotalSockets);
console.log("B: Requestes in Queue", agent.requests["127.0.0.1:8000:"]?.length);
console.log("B: Sockets in Queue", agent.sockets["127.0.0.1:8000:"]?.length);
console.log(
  "B: Unique Name",
  agent.getName({
    host: "127.0.0.1",
    localAddress: "127.0.0.1",
    port: 8000,
    family: 4,
  })
);

const urlOptions = new URL("http://127.0.0.1:8000");
urlOptions.agent = agent;
// console.log("urlOptions", urlOptions);
// console.time("start");
let i = 1;
let j = 1;
const timeout = setInterval(() => {
  if (j == 3) {
    clearInterval(timeout);
    return;
  }
  const req = request(urlOptions, (res) => {
    console.log("statusCode:", res.statusCode, i);
    // console.log("headers:", res.headers);
    res.on("data", (d) => {
      //   console.log("DATA", d);
    });
    // agent.keepSocketAlive(agent.sockets["127.0.0.1:8000:"][0]);
    // agent.reuseSocket(agent.sockets["127.0.0.1:8000:"][0], req);
    console.log("====================REQSTART=====================");
    console.log(
      "C: Free Sockets",
      agent.freeSockets["127.0.0.1:8000:"]?.length || 0
    );
    console.log(
      "C: Requestes in Queue",
      agent.requests["127.0.0.1:8000:"]?.length || 0
    );
    console.log(
      "C: Sockets in Queue",
      agent.sockets["127.0.0.1:8000:"]?.length
    );
    console.log("====================REQEND=====================");
  });

  req.on("error", (e) => {
    console.error(e);
  });
  req.end(() => {});
  j++;
}, [1]);

// console.log("A: Free Sockets", agent.sockets["127.0.0.1:8000:"]?.length);
// console.log("A: Requestes in Queue", agent.requests["127.0.0.1:8000:"]?.length);
// console.log("A: Sockets in Queue", agent.sockets["127.0.0.1:8000:"]?.length);

// setInterval(() => {
//   //   console.timeEnd("start");
//   console.log("====================START=====================");
//   console.log("after 500ms");
//   console.log("C: Free Sockets", agent.freeSockets);

//   console.log(
//     "C: Requestes in Queue",
//     agent.requests["127.0.0.1:8000:"]?.length || 0
//   );
//   console.log("C: Sockets in Queue", agent.sockets["127.0.0.1:8000:"]?.length);
//   console.log("====================END=====================");
// }, 500);
