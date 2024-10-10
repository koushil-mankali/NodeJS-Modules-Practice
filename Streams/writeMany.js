import { open } from "node:fs/promises";
// import { open, close, write, writeSync } from "node:fs";

try {
  // 6.6s, 3GB memory, 30% CPU
  //   const fileHandler = await open("./test.txt", "a+");
  //   console.time("test");
  //   for (let i = 0; i < 1000000; i++) {
  //     fileHandler.write(`${i} `);
  //   }
  //   console.timeEnd("test");
  //   fileHandler.close();
  // 1.6s, 800MB, 30% CPU
  //   open("./test.txt", "a+", (err, fd) => {
  //     console.log("FD", fd);
  //     console.time("test");
  //     for (let i = 0; i < 1000000; i++) {
  //       //   writeSync(fd, `${i} `); // 27MB
  //       write(fd, `${i} `, (err) => console.log);
  //     }
  //     console.timeEnd("test");
  //     close(fd);
  //   });
  // 225ms, 230MB, 3.3% CPU
  // const fileHandler = await open("./test.txt", "w+");
  // const stream = fileHandler.createWriteStream();
  // console.time("start");
  // for (let i = 0; i < 1000000; i++) {
  //   stream.write(`${i} `);
  // }
  // stream.close();
  // console.timeEnd("start");
  // fileHandler.close();

  //40MB, 2s, 4% CPU
  console.time("start");
  const fileHandler = await open("./test.txt", "w+");
  const stream = fileHandler.createWriteStream();

  let i = 1;
  function writToFile() {
    while (i <= 1000000) {
      if (i == 1000000) {
        stream.end(`${i}\n`);
        break;
      }
      const isEmpty = stream.write(`${i} `);
      i++;
      if (!isEmpty) break;
    }
  }
  writToFile();
  stream.on("drain", () => {
    writToFile();
  });

  stream.on("finish", () => {
    console.timeEnd("start");
    fileHandler.close();
  });
} catch (err) {
  console.error(err);
}
