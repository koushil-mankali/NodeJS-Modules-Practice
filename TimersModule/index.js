import {
  setImmediate as setImmediatePr,
  setTimeout as setTimeoutPr,
  setInterval as setIntervalPr,
  scheduler,
} from "node:timers/promises";

console.log("First Console");

let intervalCount = 1000;
let timeoutCount = 2000;

const clearImm = setImmediate(
  (p1, p2) => {
    console.log("Immediate: ", "p1 ", p1, "p2 ", p2);
  },
  "param1",
  "param2"
);

const clearTm = setTimeout(
  (p1, p2) => {
    console.log(`Timeout ${timeoutCount}: `, "P1 ", p1, "P2 ", p2);
  },
  timeoutCount,
  "param1",
  "param2"
);

const clearInt = setInterval(
  (p1, p2) => {
    console.log(`Interval ${intervalCount}: `, "P1 ", p1, "P2 ", p2);
  },
  intervalCount,
  "param1",
  "param2"
);

console.log("Timeout HasRef Before: ", clearTm.hasRef());
console.log("Interval HasRef Before: ", clearInt.hasRef());
console.log("Immediate HasRef Before: ", clearImm.hasRef());

clearImm.unref();
clearTm.unref();
clearInt.unref();

console.log("Timeout HasRef After: ", clearTm.hasRef());
console.log("Interval HasRef After: ", clearInt.hasRef());
console.log("Immediate HasRef After: ", clearImm.hasRef());

console.log("================");
console.log("Timeout ref Before: ", clearTm.hasRef());
console.log("Interval ref Before: ", clearInt.hasRef());
console.log("Immediate ref Before: ", clearImm.hasRef());

clearImm.ref();
clearTm.ref();
clearInt.ref();

console.log("Timeout 2 HasRef After: ", clearTm.hasRef());
console.log("Interval 2 HasRef After: ", clearInt.hasRef());
console.log("Immediate 2 HasRef After: ", clearImm.hasRef());

const timeOutPr = await setTimeoutPr(timeoutCount, "param1");
clearTimeout(clearTm);
console.log("Timeout Cleared");
console.log("timeOutPr", timeOutPr);

clearInterval(clearInt);
console.log("Interval Cleared");
const abrt = new AbortController();
const abrtSignal = abrt.signal;
try {
  for await (const intervalPr of setIntervalPr(intervalCount, "param1", {
    signal: abrtSignal,
  })) {
    console.log("intervalPr", intervalPr);
    abrt.abort();
  }
} catch (err) {
  console.log("Aborted");
}

const immPr = await setImmediatePr("param1");
clearImmediate(clearImm);
console.log("Immediate Cleared");
console.log("immPr", immPr);

console.log("================ Sechdulars ============");

await scheduler.yield();
console.log("Schedular Yeild Ran");

await scheduler.wait(3000);
console.log("Schedular Wait Ran");
