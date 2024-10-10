import { Buffer } from "node:buffer";
import {
  open,
  access,
  constants,
  appendFile,
  writeFile,
  chmod,
  copyFile,
  cp,
  glob,
  link,
  lutimes,
  mkdir,
  mkdtemp,
  opendir,
  readdir,
  readFile,
  readlink,
  realpath,
  rename,
  rmdir,
  rm,
  stat,
  statfs,
  symlink,
  truncate,
  unlink,
  utimes,
  watch,
} from "node:fs/promises";
// import { unlink, unlinkSync, openSync, chmod } from "node:fs";

try {
  // await writeFile("./testopen.txt", "==This is new", {
  //   mode: constants.O_TRUNC,
  // });
  // await open("./testopen.txt", constants.O_DIRECTORY);
  // await open("./testopen.txt", constants.O_CREAT | constants.O_EXCL);
  // console.log("constants", constants);
  // await writeFile("./testfile2.txt", "This is new Text!");
  // const watcher = watch("./test", { recursive: true, persistent: true });
  // for await (let event of watcher) {
  //   console.log("EVent", event);
  //   const content = await readFile("./test/" + event.filename, {
  //     encoding: "utf8",
  //   });
  //   console.log("content", content);
  // }
  // await utimes("./src.txt", new Date(), new Date());
  // await unlink("./testlinkfile.txt");
  // await link("./test/testfile.txt", "./testlinkfile.txt");
  // await truncate("./testfile2.txt", 5);
  // const sylink = await symlink("./test", "testsymlink.txt");
  // console.log("sylink", sylink);
  // const statsFS = await statfs("./temp");
  // console.log(statsFS);
  // const stats = await stat("./testfile2.txt");
  // console.log("stats", stats);
  // const data = await readlink("./tar", { encoding: "utf8" });
  // const data = await realpath("./test/testfile.txt");
  // const data = await rename("./testfile.txt", "./testfile3.txt");
  // console.log("Data", data);
  // await rmdir("./TestFolde", {
  //   recursive: true,
  //   maxRetries: 2,
  //   retryDelay: 100,
  // });
  // await rm("./TestFolde", {
  //   recursive: true,
  //   maxRetries: 2,
  //   retryDelay: 100,
  // });
  // const data = await readFile("./testfile2.txt");
  // console.log("data", data.toString("utf8"));
  // const controller = new AbortController();
  // controller.abort();
  // const data = await readFile("./testfile2.txt", { signal: controller.signal });
  // console.log("data", data);
  // const dirs = await readdir("./temp", {
  //   withFileTypes: false,
  //   recursive: true,
  // });
  // for (let dir of dirs) {
  //   console.log("dir", dir);
  // }
  // const dir = await opendir("./temp", {
  //   recursive: false,
  // });
  // for await (let file of dir) {
  //   console.log("File", file.path + "/" + file.name);
  //   const isDir = file.name?.split(".")[1] ? false : true;
  //   console.log("Type", isDir);
  //   // if (isDir) {
  //   //   const innDir = await opendir(`${file.parentPath}/${file.name}`);
  //   //   for await (let file of innDir) {
  //   //     console.log("innDir", file.path + "/" + file.name);
  //   //   }
  //   // }
  // }
  // const pathToFile = "./testfile2.txt";
  // const buff = Buffer.from(pathToFile, "utf8");
  // // console.log("Buff", buff);
  // const fileDir = await open(buff, "w+");
  // // console.log("fileDir", fileDir);
  // fileDir.writeFile("This is buffered Text!");
  // await mkdir("./mkdirfolder");
  // const newpath = await mkdtemp("./temp/");
  // console.log("newpath", newpath);
  // await writeFile(newpath + "/testfile.txt", "Hello!");
  // await link("./test/testfile.txt", "./tar/testfile2.txt");
  // await lutimes("./tar/testfile2.txt", new Date(), new Date());
  // for await (const entry of glob("./test/*.txt")) {
  //   console.log("Files", entry);
  // }
  // await copyFile("./src.txt", "./dest.txt");
  // await cp("./test/", "./tar/");
  // await chmod("./testfile.txt", 0o600);
  // const data = await appendFile(
  //   "./testfile2.txt",
  //   "Hi this is from appendFile!",
  //   {
  //     flag: "w",
  //     encoding: "utf8",
  //     flush: true,
  //   }
  // );
  // const data = await writeFile("./testfile2.txt", "Hello from writeFile!", {
  //   flag: "w",
  //   encoding: "utf-8",
  //   flush: true,
  // });
  // console.log("DATA", data);
  // const fileAr = await unlink("./testfile.txt");
  // console.log("Success!");
  // unlink("./testfile.txt", (err) => {
  //   if (err?.errno) {
  //     console.log("Error deleting file", err);
  //   }
  // });
  // unlinkSync("./testfile.txt");
  // console.log("Success!");
  // const fd = await openSync("./testfile.txt");
  /**
   * A = 1
   * W = 2
   * R = 4
   */
  // const fileHandler = await open("./testfile.txt", "w+"); // 2
  // console.log("fd", fileHandler);
  // const modeChange = await fileHandler.chmod(1);
  // console.log("modeChange", modeChange);
  // const fileApp = await fileHandler.appendFile("Appended from Node!", {
  //   encoding: "utf-8",
  //   flush: true,
  // });
  // const fileApp = fileHandler.writeFile("Written from Node!", {
  //   encoding: "utf-8",
  //   flush: true,
  // });
  // console.log("fileApp", await fileApp);
  // const stream = fileHandler.createReadStream();
  // console.log("Stream", stream.read(0));
  // const fileBuff = Buffer.alloc(100);
  // const fileApp = await fileHandler.read(fileBuff);
  // console.log("Data=", fileApp.buffer.toString("utf-8"));
  // console.log("bytes read=", fileApp.bytesRead);
  // const fileApp = await fileHandler.readFile({ encoding: "utf8" });
  // console.log("Data=", fileApp);
  // const fileApp = await fileHandler.readFile();
  // console.log("Data=", fileApp.toString("utf8"));
  // const readLine = fileHandler.readLines();
  // for await (const line of readLine) {
  //   console.log(line);
  // }
  // const buff1 = Buffer.alloc(10);
  // const buff2 = Buffer.alloc(10);
  // const buff3 = Buffer.alloc(10);
  // const arrBuffs = await fileHandler.readv([buff1, buff2, buff3]);
  // console.log("arrBuffs", arrBuffs);
  // console.log("arrBuffs 1", arrBuffs.buffers[0].toString("utf8"));
  // console.log("arrBuffs 2", arrBuffs.buffers[1].toString("utf8"));
  // console.log("arrBuffs 3", arrBuffs.buffers[2]?.toString("utf8"));
  // await fileHandler.truncate(2); // only works for r+
  // console.log("stat before", await fileHandler.stat());
  // await fileHandler.utimes(
  //   new Date(2000, 2, 29, 11),
  //   new Date(2000, 2, 29, 11)
  // );
  // console.log("stat after", await fileHandler.stat());
  // const buff1 = Buffer.from("Hello From Write Stream!\n");
  // const buff2 = Buffer.from("Hello From Write Stream Array!");
  // await fileHandler.write(buff1);
  // await fileHandler.write("Hello from String!", null, "utf8");
  // const wrStream = fileHandler.createWriteStream();
  // wrStream.write(buff1);
  // await fileHandler.writeFile("Hello from write file!");
  // await fileHandler.writev([buff1, buff2]);
  // fileHandler.close();
  // fileHandler.chmod(4);
  // const accessCheck = await access(
  //   "./testfile.txt",
  //   constants.R_OK,
  //   constants.W_OK
  // );
  // console.log("accessCheck", accessCheck);
} catch (er) {
  console.error(er);
}
