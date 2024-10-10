import { EventEmitter } from "node:events";

const myEmiter = new EventEmitter();

myEmiter.on("click", () => {
  console.log("Click Called");
});

myEmiter.emit("click");
