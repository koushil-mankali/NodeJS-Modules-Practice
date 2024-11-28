import OS from "node:os";

console.log("Test EOL");
console.log("Line 2");
console.log("+++++++++++++++++");
console.log("Test EOL");
console.log(OS.EOL);
console.log("Line 2");

console.log("+++++++++++++++++");
console.log("Available Parallelism", OS.availableParallelism());
console.log("+++++++++++++++++");
console.log("Available CPUs", OS.cpus()[0]);
console.log("+++++++++++++++++");
console.log("Arch", OS.arch());
console.log("+++++++++++++++++");
console.log("DevNull", OS.devNull);
console.log("+++++++++++++++++");
console.log("Total Mem", OS.totalmem() / Math.pow(1024, 3) + "GB");
console.log("+++++++++++++++++");
console.log("Free Mem", OS.freemem() / Math.pow(1024, 3) + "GB");
console.log("+++++++++++++++++");
console.log("Endiness", OS.endianness());
console.log("+++++++++++++++++");
console.log("Home Dir", OS.homedir());
console.log("+++++++++++++++++");
console.log("HostName", OS.hostname());
console.log("+++++++++++++++++");
console.log("Machine", OS.machine());
console.log("+++++++++++++++++");
console.log("Get Priority", OS.getPriority());
console.log("Get Priority of PID", process.ppid, OS.getPriority(process.ppid));
console.log("Get Priority of PID", process.pid, OS.getPriority(process.pid));
console.log("+++++++++++++++++");
console.log(
  "Set Priority",
  OS.setPriority(process.ppid, OS.constants.priority.PRIORITY_HIGHEST)
);
console.log("Get Priority of", process.ppid, OS.getPriority(process.ppid));
console.log("+++++++++++++++++");
console.log("LoadAvg", OS.loadavg());
console.log("+++++++++++++++++");
console.log("Platform", OS.platform());
console.log("+++++++++++++++++");
console.log(
  "Network Interfaces = Subnet Address",
  OS.networkInterfaces()?.["Wi-Fi 2"]?.[1]?.address
);
console.log("+++++++++++++++++");
console.log("Release", OS.release());
console.log("+++++++++++++++++");
console.log("Temp Dir:", OS.tmpdir());
console.log("+++++++++++++++++");
console.log("TYPE:", OS.type());
console.log("+++++++++++++++++");
console.log("UPTime:", OS.uptime());
console.log("+++++++++++++++++");
console.log("Version", OS.version());
console.log("+++++++++++++++++");
console.log("USER Info:", OS.userInfo());
console.log("+++++++++++++++++");
console.log("Constants", OS.constants);
console.log("+++++++++++++++++");
