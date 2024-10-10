import {
  EventEmitter,
  errorMonitor,
  getEventListeners,
  on,
  addAbortListener,
} from "node:events";

const myEmitter = new EventEmitter({ captureRejections: true });
// class MyEmitter extends EventEmitter {}
// const myEmitter = new MyEmitter();
try {
  //   myEmitter.on("customEmitter", (data) => {
  //     console.log("Emmited", data);
  //   });
  //   myEmitter.emit("customEmitter", 1);
  //   myEmitter.emit("customEmitter", 2);
  //   myEmitter.once("onceCalled", (data) => {
  //     console.log("Once", data);
  //   });
  //   myEmitter.emit("onceCalled", "Called");
  //   myEmitter.emit("onceCalled", "Called");
  //   myEmitter.on(errorMonitor, (err) => {
  //     console.error(err);
  //   });
  //   myEmitter.on("error", (err) => {
  //     console.error("Custom Error", err);
  //   });
  //   myEmitter.emit("error", new Error("Emitted Error!"));
  //   console.log("After Error");
  //   myEmitter.on("emitAsync", async (data) => {
  //     console.log("Asnyc 1", data);
  //   });
  //   myEmitter.on("emitAsync", async (data) => {
  //     throw new Error("Async Reject!");
  //   });
  //   myEmitter.on("error", async (err) => {
  //     console.error("Custom Error2", err);
  //   });
  //   myEmitter[Symbol.for("nodejs.rejection")] = console.log;
  //   myEmitter.emit("emitAsync", "Async1 Emitted");
  //   myEmitter.once("newListener", (event, listener) => {
  //     if ((event = "testListeners")) {
  //       myEmitter.on("testListeners", () => {
  //         console.log("Called inside newListener");
  //       });
  //     }
  //     console.log("NEW Listener", event);
  //   });
  //   myEmitter.on("testListeners", () => {
  //     console.log("testListeners called");
  //     return 2;
  //   });
  //   myEmitter.emit("testListeners");
  //   myEmitter.emit("testListeners");
  //   myEmitter.on("newListener", (event, listner) => {
  //     console.log("NEW Listener", event);
  //   });
  //   const testListenerFunc = () => {
  //     console.log("Customer Listener");
  //   };
  //   myEmitter.addListener("testListener", testListenerFunc);
  //   console.log("Listeners", myEmitter.listeners("testListener").toString());
  //   myEmitter.off("testListener", testListenerFunc);
  //   myEmitter.removeListener("testListener", testListenerFunc);
  //   myEmitter.emit("testListener");
  //   console.log("Listener Count", myEmitter.listenerCount("testListener"));
  //   console.log("Event Names", myEmitter.eventNames());
  //   console.log("Default Max Listeners", EventEmitter.defaultMaxListeners);
  //   myEmitter.setMaxListeners(2);
  //   console.log("Custom Max Listeners", myEmitter.getMaxListeners());
  //   const testListFunc2 = () => {
  //     console.log("Test Listener 2");
  //   };
  //   const testListFunc = () => {
  //     console.log("Test Listener 1");
  //     myEmitter.removeListener("testListener1", testListFunc2);
  //   };
  //   myEmitter.on("testListener1", testListFunc);
  //   myEmitter.on("testListener1", testListFunc2);
  //   myEmitter.prependListener("testListener1", () => {
  //     console.log("Prepended Listener");
  //   });
  //   myEmitter
  //     .prependOnceListener("testListener1", () => {
  //       console.log("Prepend Listener Once");
  //     })
  //     .addListener("appendedListener", () => {
  //       console.log("Appended Listener");
  //     });
  //   myEmitter.removeAllListeners();
  //   console.log("BEfore events", myEmitter.eventNames());
  //   myEmitter.emit("testListener1");
  //   myEmitter.removeAllListeners(["testListener1"]);
  //   myEmitter.emit("appendedListener");
  //   myEmitter.emit("appendedListener");
  //   console.log("After events", myEmitter.eventNames());
  //   myEmitter.emit("testListener1");
  // myEmitter.on("rawTest", () => {
  //   console.log("RAW TEST");
  // });
  //   myEmitter.once("rawTest", () => {
  //     console.log("RAW TEST Once");
  //   });
  //   const rawListeners = myEmitter.rawListeners("rawTest");
  //   console.log("rawListeners", rawListeners, rawListeners.length);
  //   rawListeners[1].listener();
  //   rawListeners[1].listener();
  //   rawListeners[1]();
  //   myEmitter.emit("rawTest");
  //   myEmitter.on("error", (err) => {
  //     console.log("ERR---", err);
  //   });
  //   myEmitter.on("test", async () => {
  //     throw new Error("test");
  //   });
  //   myEmitter.on(errorMonitor, (err) => {
  //     console.log("ERR", err);
  //   });
  //   myEmitter.emit("test");
  // const listeners = getEventListeners(myEmitter, "rawTest");
  // const listeners2 = myEmitter.listeners("rawTest");
  // console.log("listeners 1", listeners);
  // console.log("listeners 2", listeners2);
  // myEmitter.on("abortTest", (log, signal) => {
  //   console.log("Abort Test = ", log);
  // });
  // const ab = new AbortController();
  // ab.abort();
  // myEmitter.emit("abortTest", "test", ab.signal);
  // const ab = new AbortController();
  // process.nextTick(() => ab.abort());
  // const event = on(myEmitter, "abortTest", { signal: ab.signal });
  // console.log("ev", event);
  // if (event[0] == "no") {
  //   console.log("1st Event");
  // }
  // if ((event[0] == "onAbortTest")) {
  //   console.log("onAbortTest printed");
  // }
  // process.nextTick(() => {
  //   myEmitter.emit("abortTest", "onAbortTest");
  // });
  // const abortSignal = new AbortController();
  // const dispose = addAbortListener(abortSignal.signal, () => {
  //   console.log("Signal Aborted!");
  // });
  // (async () => {
  //   for await (const ev of on(myEmitter, "abortTest2", {
  //     signal: abortSignal.signal,
  //   })) {
  //     console.log("ev", ev);
  //   }
  // })();
  // abortSignal.abort("Abort Test");
  // console.log("dispose", dispose);
  // myEmitter.emit("abortTest2", "Emitted");
  // myEmitter.on("error", (err) => {
  //   console.error("Emit Error", err);
  // });
  // const target = new EventTarget();
  // const hand1 = (event) => {
  //   // throw new Error("test error");
  //   console.log(
  //     "Hand1",
  //     event,
  //     event.currentTarget,
  //     event.target,
  //     event.eventPhase
  //   );
  //   event.stopImmediatePropagation();
  // };
  // const hand2 = (event) => {
  //   console.log("Hand2", event);
  // };
  // target.addEventListener("foo", hand1);
  // target.addEventListener("foo", hand2);
  // target.addEventListener("foo", hand1); // ignored
  // target.dispatchEvent(new Event("foo"));
  // process.on("error", (err) => {
  //   console.log("Process Err", err);
  // });
  // const ev = new CustomEvent("foo", {
  //   detail: {
  //     name: "koushil",
  //     age: 24,
  //   },
  // });
  // const target = new EventTarget();
  // target.addEventListener("foo", (event) => {
  //   console.log("EVV", event.detail);
  // });
  // target.dispatchEvent(ev);
} catch (err) {
  console.error("Catch", err);
}
