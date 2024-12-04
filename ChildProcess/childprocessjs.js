import { execFile, spawn, fork, exec } from "node:child_process";

const child = exec("node sample.js");

// const child = execFile(
//   String.raw`C:\Program Files\Mozilla Firefox\firefox.exe`
// );
// const child = spawn(String.raw`C:\Program Files\Mozilla Firefox\firefox.exe`);
// const child = fork("sample.js");

child.stdout.on("data", (data) => {
  console.log("DATA: ", data?.toString("utf8"));
});

// child.send("Hi from parent!");

// child.on("message", (mess) => {
//   console.log("Parent:", mess);
// });

// child.stderr.on("error", (err) => {
//   console.log("ERROR: ", err);
// });

child.on("exit", () => {
  console.log("Exited!");
});

child.on("close", () => {
  console.log("Closed!");
});

child.on("spawn", () => {
  console.log("Spawned!");
});

console.log("PID:", process.pid);
console.log("CPID:", child.pid);
console.log("SpawnFile:", child.spawnfile);
console.log("SpawnArgs:", child.spawnargs);
console.log("Killed:", child.killed);
