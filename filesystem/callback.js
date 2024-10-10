import {
  access,
  constants,
  chmod,
  appendFile,
  writeFile,
  open,
  close,
  copyFile,
  cp,
  ftruncate,
  glob,
  link,
  lstat,
  mkdir,
  mkdtemp,
  openAsBlob,
  opendir,
  read,
  readdir,
  readFile,
  readlink,
  readv,
  realpath,
  rename,
  rmdir,
  rm,
  stat,
  statfs,
  symlink,
  truncate,
  unlink,
  unwatchFile,
  watchFile,
  watch,
  utimes,
  write,
  writev,
} from "node:fs";

try {
  // const buff1 = Buffer.from("Hello from");
  // const buff2 = Buffer.from(" buffered ring!");
  // open("./bufferedWrite.txt", "w+", (err, fd) =>
  //   writev(fd, [buff1, buff2], (err, bytes, data) => {
  //     console.log("ERR", err);
  //     console.log("data", data);
  //     console.log("data[0]", data[0].toString("utf8"));
  //     console.log("data[1]", data[1].toString("utf8"));
  //   })
  // );
  // writeFile("./bufferedWrite.txt", "This is from WriteFile!", (err) => {
  //   console.log("ERR", err);
  // });
  // open("./bufferedWrite.txt", "w+", (err, fd) => {
  //   console.log("fd", fd);
  //   write(fd, "Hi this is Write!", (err, bytes, data) => {
  //     console.log("ERR", err);
  //     console.log("bytes", bytes);
  //     console.log("data", data);
  //   });
  // });
  // utimes("./src.txt", new Date(), new Date(), (err) => {
  //   console.log("ERR", err);
  // });
  // watch("./temp", { recursive: false }, (eventType, file) => {
  //   console.log("EventType", eventType);
  //   console.log("FILE", file);
  // });
  // watchFile("./src.txt", (curr, prev) => {
  //   console.log("Curr", curr);
  //   console.log("PREV", prev);
  // });
  // setTimeout(() => {
  //   unwatchFile("./src.txt");
  // }, 10000);
  // unlink("./tar/testfile2.txt", (err) => {
  //   console.log("ERR", err);
  // });
  // truncate("./testopen2.txt", 12, (err) => {
  //   console.log("ERR", err);
  // });
  // symlink("./testFileSample.txt", ".symlink.txt", (err) => {
  //   console.log("ERR", err);
  // });
  // statfs("./tar/dest.txt", {}, (err, data) => {
  //   console.log("ERR", err);
  //   console.log("DATA", data);
  // });
  // stat("./src.txt", {}, (err, data) => {
  //   console.log("ERR", err);
  //   console.log("DATA", data);
  // });
  // rm("./testopen.text", (err) => {
  //   console.log("ERR", err);
  // });
  // rm("./tempdir", { recursive: true }, (err) => {
  //   console.log("ERR", err);
  // });
  // rmdir("./tempcp", {}, (err, data) => {
  //   console.log("ERR", err);
  //   console.log("DATA", data);
  // });
  // rename("./testopen.txt", "testopen2.txt", (err, data) => {
  //   console.log("ERR", err);
  //   console.log("DATA", data);
  // });
  // realpath.native("./tar/dest.txt", (err, data) => {
  //   console.log("ERR", err);
  //   console.log("data", data);
  // });
  // realpath("./tar/dest.txt", (err, data) => {
  //   console.log("ERR", err);
  //   console.log("data", data);
  // });
  // open("./src.txt", (err, fd) => {
  //   console.log("FD", fd);
  //   const buff1 = Buffer.alloc(10);
  //   const buff2 = Buffer.alloc(10);
  //   const buff3 = Buffer.alloc(15);
  //   readv(fd, [buff1, buff2, buff3], (err, bytesRead, data) => {
  //     console.log("ERR", err);
  //     console.log("bytesRead", bytesRead);
  //     console.log("DATA", data[0].toString("utf8"));
  //     console.log("DATA", data[1].toString("utf8"));
  //     console.log("DATA", data[2].toString("utf8"));
  //   });
  // });
  // readlink("./src.txt", { encoding: "utf8" }, (err, data) => {
  //   console.log("ERR", err);
  //   console.log("DATA", data);
  // });
  // readFile(
  //   "./src.txt",
  //   {
  //     encoding: "utf8",
  //   },
  //   (err, data) => {
  //     console.log("DATA", data);
  //   }
  // );
  // readdir("./temp", { recursive: true, withFileTypes: false }, (err, data) => {
  //   console.log("ERR", err);
  //   console.log("DATRA", data);
  // });
  // open("./src.txt", (err, fd) => {
  //   console.log("FD", fd);
  //   const buff = Buffer.alloc(31);
  //   read(fd, { buffer: buff }, (err, bytesRead, data) => {
  //     console.log("ERR", err);
  //     console.log("Bytes", bytesRead);
  //     console.log("BUffer", data.toString("utf8"));
  //   });
  // });
  // opendir(
  //   "./temp",
  //   {
  //     recursive: true,
  //   },
  //   (err, data) => {
  //     (async () => {
  //       for await (const dirent of data) console.log(dirent.name);
  //     })();
  //   }
  // );
  // const blob = await openAsBlob("./src.txt", { type: "application/text" });
  // console.log("blob", Buffer.from(await blob.arrayBuffer()).toString("utf8"));
  //   mkdtemp("./tempdir/test.txt", (err, data) => {
  //     console.log("ERR", err);
  //     console.log("DATA", data);
  //   });
  //   mkdir("./tempdir", (err, data) => {
  //     console.log("ERR", err);
  //     console.log("DATA", data);
  //   });
  //   lstat("./testopen.txt", (err, data) => {
  //     console.log("ERR", err);
  //     console.log("DATA", data);
  //   });
  //   link("./src.txt", "./tar/dest.txt", (err, data) => {
  //     console.log("ERR", err);
  //     console.log("DATA", data);
  //   });
  //   glob("./temp/*", (err, data) => {
  //     console.log("ERR", err);
  //     console.log("DATA", data);
  //   });
  //   open("./testfile3.txt", "r+", (err, fd) => {
  //     console.log("FD", fd);
  //     console.log("ERR", err);
  //     ftruncate(fd, 4, (err, data) => {
  //       console.log("err", err);
  //       console.log("DATA", data);
  //     });
  //   });
  //   cp("./testopen.txt", "./tempcp", (err) => {
  //     console.log("ERR", err);
  //   });
  //   cp("./temp/", "./tar/", { errorOnExist: true, force: true }, (err) => {
  //     console.log("ERR", err);
  //   });
  //   copyFile(
  //     "./testfile2.txt",
  //     "./testFileSample.txt",
  //     constants.COPYFILE_FICLONE,
  //     (err) => {
  //       console.log("ERR", err);
  //     }
  //   );
  //   chmod("./testfile2.txt", constants.O_RDONLY, (err, data) => {
  //     console.log("err", err);
  //     console.log("DATA", data);
  //   });
  //   access("./testfile2.txt", constants.O_RDWR, (err) => {
  //     console.log("Err", err);
  //   });
  //   appendFile(
  //     "./testopen.txt",
  //     "This is Callback Func!",
  //     {
  //       flush: true,
  //     },
  //     (err) => {
  //       console.log("ER", err);
  //     }
  //   );
  //   writeFile(
  //     "./testopen.txt",
  //     "This is callback func! write",
  //     { flush: true },
  //     (err) => {
  //       console.log("ERR", err);
  //     }
  //   );
  //   let fd = 0;
  //   open("./testfile2.txt", null, (err, data) => {
  //     console.log("ERR", err);
  //     fd = data;
  //     console.log("fd", fd);
  //     close(fd, (err) => {
  //       console.log("CLOSE ERR", err);
  //     });
  //   });
} catch (err) {
  console.error(err);
}
