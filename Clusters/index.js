import cluster, { isPrimary, isWorker } from "node:cluster";
import { availableParallelism } from "node:os";

// console.log("Test", isPrimary, isWorker);

if (isPrimary) {
  console.log("Primary");

  for (let i = 0; i < availableParallelism; i++) {
    cluster.fork({ child: "Yes" });
  }

  cluster.on("fork", (worker) => {
    console.log("Worker Forked id: ", worker.id);

    worker?.on("exit", () => {
      console.log("Worker Id: ", worker?.id, " Exiting!");
    });

    worker?.on("exit", () => {
      console.log("Disconnect Exit:", worker.exitedAfterDisconnect);
    });

    worker?.on("error", (err) => {
      console.log("Worker Error");
    });

    worker.on("message", (mess) => {
      console.log("Primary Message: ", mess);
    });

    worker.send(`Hello from Worker ${worker.id}`, (err) => {
      err && console.log("ERRor sending message", err);
    });

    worker.on("listening", () => {
      console.log("Worker Listening");
    });

    console.log("Connected", worker.isConnected());
    console.log("Dead", worker.isDead());

    worker.on("online", () => {
      console.log("Worker Online");
    });

    setTimeout(() => {
      worker.kill();
      console.log("Dead", worker.isDead());
    }, 2000);
  });
  //   console.log("Workers", cluster?.workers);

  //   Object.values(cluster?.workers)?.map((worker) => {
  //     console.log("Worker Value", worker.id);
  //   });

  cluster.on("message", (worker, mess) => {
    console.log("Worker " + worker.id + "Message: ", mess);
  });

  //   process.send("Message from Primary");
}

if (isWorker) {
  console.log("Worker Env", process.env?.child);
}
