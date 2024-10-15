// console.log("Up & Running!");

import {
  isMarkedAsUntransferable,
  markAsUntransferable,
  Worker,
  postMessageToThread,
  resourceLimits,
  SHARE_ENV,
  setEnvironmentData,
  getEnvironmentData,
  threadId,
  BroadcastChannel,
} from "node:worker_threads";

// console.log("Thread ID", threadId);

// console.log("PROCESS ID PArent", process.pid);

const { port1, port2 } = new MessageChannel();

// const complexObj = {
//   name: "koushil",
//   age: 24,
//   skills: ["reactjs", "nodejs"],
// };

// const worker = new Worker("./worker1.js", {
//   // argv: ["env1", "env2"],
//   // workerData: { port: port2 },
//   // transferList: [port2],
//   // env: SHARE_ENV,
// });

// console.log("PR bf", process.env.script);
// const wrokerEnv = new Worker('process.env.script="ran"', {
//   eval: true,
//   env: SHARE_ENV,
// }).on("exit", () => {
//   console.log("PR af", process.env.script);
// });

// process.env.listCount = 22;
// process.env.Test = "This is env setttt";

// setEnvironmentData("Test", "This is env set");
// console.log("ENVPARENT", getEnvironmentData("Test"));

// port1.postMessage("Hi from Parent!");

// const bc = new BroadcastChannel("hello");

// bc.postMessage("Hi from BC!");

// const worker2 = new Worker("./worker1.js");

// const worker3 = new Worker("./worker1.js", {
//   // workerData: { port: port2 },
//   // transferList: [port2],
// });

// worker.postMessage("Hi Worker1 from parent!");
// worker2.postMessage("Hi Worker2 from parent!");
// worker3.postMessage({ name: "Koushil", age: 24 });
// console.log("Test", complexObj);
// markAsUntransferable(complexObj);
// console.log("isMarkedAsUntransferable", isMarkedAsUntransferable(complexObj));
// port1.postMessage(complexObj, [complexObj]);
// port1.on("message", (data) => {
//   console.log("CHILD", data);
// });

// console.log("Test", complexObj);
// const worker2 = new Worker("./worker1.js");
// console.log("CAME");

// const parentData = new SharedArrayBuffer(32);

// const data = new Int32Array(parentData);

// data[0] = 10;

// worker.postMessage(data);

// worker.on("message", (data) => {
//   console.log("Last Iteration", data);
// });

// console.log("RES PAR", resourceLimits);
