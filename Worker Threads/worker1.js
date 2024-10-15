import {
  parentPort,
  workerData,
  postMessageToThread,
  threadId,
  resourceLimits,
  receiveMessageOnPort,
  getEnvironmentData,
  BroadcastChannel,
} from "node:worker_threads";

// const ac = new BroadcastChannel("hello");

// bc.postMessage("HI");

// ac.onmessage = (data) => {
//   console.log("BC", data.data);
// };

// console.log("PR ARV", process.execArgv);

// console.log("Thread ID", threadId);
// console.log("PROCESS ARGV", process.argv[2]);

// console.log("ENV_DATA", getEnvironmentData("op"));

// let i = 0;

// parentPort.on("message", (parentdata) => {
//   console.log("parentdata", parseInt(parentdata[0]) + parseInt(10));
//   while (i < 1000) {
//     // console.log("Running! " + i);
//     i++;
//   }
//   parentPort.postMessage(i);
// });
// console.log("PROCESS ID", process.pid);
// process.title = "worker1";

// for (let i = 0; i < 1000000000000000; i++) {}

// const { port2 } = new MessageChannel();

// const port2 = workerData.port;

// port2.on("message", (data) => {
//   console.log("DATA", data);
// });

// port2.postMessage("Hi, from Worker1");

// parentPort.on("message", (data) => {
//   console.log("data", data.name + " " + data.age);
// });
// console.log("HIII", threadId);

// const data = receiveMessageOnPort(workerData.port);

// console.log("PORT Data from portfunc", data.message);

// console.log("ENV", process.env.listCount);

// workerData.port.on("message", (data) => {
//   console.log("PORT Data from workerdata", data);
// });

// if (threadId == 1) {
//   postMessageToThread(2, "Hi from Worker1");
// }

// if (threadId == 2) {
//   postMessageToThread(1, "Hi from Worker2");
// }
// process.on("workerMessage", (data, source) => {
//   console.log("Message ", data);
// });

// console.log("RES", resourceLimits);
