import { Console } from "node:console";
import { createWriteStream } from "node:fs";
import path from "node:path";

console.log("File", path.join(import.meta.dirname, "/file.txt"));

const fileWriter = createWriteStream(
  path.join(import.meta.dirname, "/file.txt")
);

const customConsole = new Console(fileWriter);

customConsole.log("Hi from custom!");
customConsole.error(new Error("Custom error!"));
customConsole.count();
customConsole.count();
customConsole.clear();
customConsole.warn("Custom warning!");
customConsole.trace("Custom Trace");
customConsole.time("time");
customConsole.timeLog("time");
customConsole.timeEnd("time");
