import {
  accessSync,
  constants,
  appendFileSync,
  writeFileSync,
  openSync,
  closeSync,
  writeSync,
  copyFileSync,
  existsSync,
  globSync,
  linkSync,
  watch,
} from "node:fs";

try {
  // const watcher = watch("./src.txt", (err, et) => {
  //   console.log("et", et);
  //   console.log("err", err);
  // });
  // setTimeout(() => {
  //   console.log("Watcher", watcher);
  // }, 5000);
  //   accessSync("./testfile2.txt", constants.O_RDWR);
  //   appendFileSync("./src.txt", " Hello from append!", { flush: true });
  //   writeFileSync("./src.txt", "Hello from writeFileSync1", {
  //     flush: true,
  //   });
  //   const fd = openSync("./bufferedWrite.txt", "w+");
  //   console.log("FD", fd);
  //   const buff1 = Buffer.from("Hi from WriteSync");
  //   writeSync(fd, buff1);
  //   closeSync(fd);
  //   copyFileSync("./src.txt", "./bufferedWrite.txt", constants.O_RDWR);
  //   const isExists = existsSync("./test.txt");
  //   const isExists2 = existsSync("./src.txt");
  //   console.log("isExists", isExists);
  //   console.log("isExists2", isExists2);
  //   const files = globSync("./temp/*.txt", { withFileTypes: true });
  //   console.log("Files", files);
  //   linkSync("./src.txt", "./tar/syncdest.txt");
} catch (err) {
  console.error(err);
}
