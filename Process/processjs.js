import path from "node:path";
import process from "node:process";
import { isMainThread, Worker, postMessageToThread } from "node:worker_threads";

const start = process.hrtime.bigint();

console.log("=======================================");
console.log("PID: ", process.pid);
console.log("=======================================");
console.log("PPID: ", process.ppid);
console.log("=======================================");
console.log("CWD: ", path.join(process.cwd(), "/processjs.js"));
console.log("=======================================");
console.log("EVENTS:");
process.on("beforeExit", (code) => {
  console.log("Before Exit", code);
});
process.on("exit", (code) => {
  console.log("Exit:", code);
});

// process.on("warning", (mess) => {
//   console.log("Warning", mess);
// });

// process.emitWarning("This is warning!");

// process.on("workerMessage", (mess) => {
//   console.log("Worker Message: ", mess);
// });

// process.on("worker", (wk) => {
//   console.log("Worker Created:", wk.threadId);
//   postMessageToThread(wk.threadId, "A Message From Worker!");
// });

// if (isMainThread) {
//   console.log("isMainThread", isMainThread);
//   new Worker(path.join(process.cwd() + "/processjs.js"));
// }

process.on("uncaughtException", (err, origin) => {
  console.log("Uncaught Exception: ", err, origin);
});

process.on("uncaughtExceptionMonitor", (err, origin) => {
  console.log("Uncaught Exception Monitor: ", err, origin);
});

process.on("unhandledRejection", (resaon, promise) => {
  console.log("Unhandled Rejection: ", resaon, "Promise: ", promise);
});

process.on("rejectionHandled", (resaon, promise) => {
  console.log("Rejection Handled: ", resaon, "Promise: ", promise);
});

process.on("message", (mess) => {
  console.log("Message: ", mess);
});

await new Promise((res, rej) => {
  rej("promise error");
}).catch((err) => {
  console.log("ERR", err);
});

process.exitCode = 0;
console.log("=======================================");
// process.exit();

// console.log("Abort:", process.abort());
console.log("=======================================");
// console.log("Node Flags:", process.allowedNodeEnvironmentFlags);
console.log("=======================================");
console.log("Arch:", process.arch);
console.log("=======================================");
console.log("Cpu Useage:", process.cpuUsage());
console.log("=======================================");
console.log("Argv: ", process.argv);
console.log("=======================================");
console.log("Argv0: ", process.argv0);
console.log("=======================================");
console.log("ExecArgv: ", process.execArgv);
console.log("=======================================");
// console.log("CHdir: ", process.chdir("../"));
console.log("CWD: ", process.cwd());
console.log("=======================================");
// console.log("Config: ", process.config);
console.log("=======================================");
console.log("ENV", process.env.PUBLIC);
console.log("=======================================");
console.log("[IPC] Connected: ", process.connected);
console.log("=======================================");
console.log("Constrained Memory:", process.constrainedMemory());
console.log("=======================================");
console.log("Available Memory: ", process.availableMemory());
console.log("=======================================");
console.log("Memory Usage:", process.memoryUsage());
console.log("=======================================");
console.log("Resource Usage:", process.resourceUsage());
console.log("=======================================");
console.log("RSS", process.memoryUsage.rss());
console.log("=======================================");
console.log("Debug Port:", process.debugPort);
console.log("=======================================");
console.log("Exec Path:", process.execPath);
console.log("=======================================");
console.log("Features:");
console.log("IPV6", process.features.ipv6);
console.log("TLS", process.features.tls);
console.log("tls_apln", process.features.tls_alpn);
console.log("tls_ocsp", process.features.tls_ocsp);
console.log("tls_sni", process.features.tls_sni);
console.log("Typescript", process.features.typescript);
console.log("UV", process.features.uv);
console.log("Require Module", process.features.require_module);
console.log("Inspector", process.features.inspector);
console.log("Debug", process.features.debug);
console.log("Cached Builtins", process.features.cached_builtins);
console.log("=======================================");
console.log("Get active Resource Info", process.getActiveResourcesInfo());
console.log("=======================================");
console.log(
  "Builtin Module OS:",
  process.getBuiltinModule("node:os").freemem()
);
console.log("=======================================");
console.log(
  "Uncaught Exception Callback:",
  process.hasUncaughtExceptionCaptureCallback()
);

process.setUncaughtExceptionCaptureCallback((obj) => {
  console.log("Uncaught Exception set:", obj);
});
console.log(
  "Uncaught Exception Callback:",
  process.hasUncaughtExceptionCaptureCallback()
);
console.log("=======================================");

setTimeout(() => {
  const end = process.hrtime.bigint();
  console.log("HrTime: ", (end - start) / BigInt(1000000000) + " seconds");
  console.log("=======================================");
}, 2000);

console.log("=======================================");
console.log("B ENV: ", process.env?.test);
process.loadEnvFile(path.join(process.cwd(), "/.env"));
console.log("A ENV: ", process.env?.test);
console.log("=======================================");
// console.log("Main Module", process.mainModule);
// console.log("require Module", require.main);
console.log("=======================================");
console.log("No Deprecation", process.noDeprecation);
console.log("=======================================");
console.log("Platform", process.platform);
console.log("=======================================");
console.log("Release", process.release);
console.log("=======================================");
console.log("Version", process.version);
console.log("=======================================");
console.log("Versions", process.versions.node);
console.log("=======================================");
// process.send("hi from process!");
console.log("Gid:", process.getgid);
console.log("=======================================");
console.log("B Get Source Map", process.sourceMapsEnabled);
process.setSourceMapsEnabled(true);
console.log("A Get Source Map", process.sourceMapsEnabled);
console.log("=======================================");
console.log("Process STD:");
console.log("Process StdIN: ", process.stdin.fd);
console.log("Process StdOut: ", process.stdout.fd);
console.log("Process StdError: ", process.stderr.fd);
console.log("=======================================");
console.log("Throw Deprecation", process.throwDeprecation);
console.log("=======================================");
console.log("Trace Deprecation", process.traceDeprecation);
console.log("=======================================");
console.log("Title", process.title);
console.log("=======================================");
console.log("Uptime", process.uptime());
console.log("=======================================");
