import { Readable, Writable, Duplex, Transform } from "node:stream";
import {
  createReadStream,
  createWriteStream,
  open,
  readFile,
  read,
  write,
  close,
} from "node:fs";
import { Buffer } from "node:buffer";

// const readstream = createReadStream("./test.txt");
// const writestream = createWriteStream("./testdest.txt");

class myReadable extends Readable {
  constructor(options) {
    super(options);
    this.src = options.src;
    this.fd = null;
  }

  _construct(callback) {
    open(this.src, (err, fd) => {
      if (err) {
        callback(err);
      }
      this.fd = fd;
      callback();
    });
  }

  _read(size) {
    readFile(this.fd, (err, chunk) => {
      if (err) {
        this._destroy(err);
      }
      this.push(chunk.length > 0 ? chunk : null);
    });
  }

  _destroy(err, callback) {
    if (this.fd) {
      close(this.fd);
    } else {
      callback(err);
    }
  }
}

class myWritable extends Writable {
  constructor(options) {
    super(options);

    this.src = options.writeSrc;
    this.fd = null;
  }

  _construct(callback) {
    open(this.src, "w+", (err, fd) => {
      if (err) {
        callback(err);
      } else {
        this.fd = fd;
        callback();
      }
    });
  }

  _write(chunk, encoding, callback) {
    console.time("start");
    try {
      write(this.fd, chunk, 0, encoding, (err, written, string) => {
        console.log("Written", written);
        console.timeEnd("start");
      });
    } catch (err) {
      callback(err);
    }
  }

  _destroy(err, callback) {
    if (err) {
      callback(err);
    }
    close(this.fd);
    callback();
  }

  _final(callback) {
    callback();
  }
}

class myDuplex extends Duplex {
  constructor(options) {
    super({ ...options, emitClose: true });

    this.readerSrc = options.readerSrc;
    this.writerSrc = options.writerSrc;
    this.readFd = null;
    this.writeFd = null;
  }

  _construct(callback) {
    open(this.readerSrc, (err, fd) => {
      if (err) {
        callback(err);
      } else {
        this.readFd = fd;
        open(this.writerSrc, "w+", (err, fd) => {
          if (err) {
            callback(err);
          } else {
            this.writeFd = fd;
            callback();
          }
        });
      }
    });
  }

  _write(chunk, encoding, callback) {
    const chunkSize = chunk.indexOf(0);
    let data = chunk;
    if (chunkSize > 0) {
      data = chunk?.toString("utf8").substring(0, chunkSize);
    }
    write(this.writeFd, data, (err) => {
      callback(err);
    });
  }

  _read(size) {
    const buff = Buffer.alloc(size || 16000);
    read(
      this.readFd,
      buff,
      0,
      size || 16000,
      null,
      (err, bytesRead, buffer) => {
        if (err) {
          this._destroy(err);
        }
        this.push(bytesRead > 0 ? buffer : null);
      }
    );
  }

  _destroy(err, callback) {
    if (err) {
      callback(err);
    } else {
      callback();
    }
    close(this.readFd);
    close(this.writeFd);
  }

  _final(callback) {
    callback();
  }
}

// const duplex = new myDuplex({
//   readerSrc: "./test.txt",
//   writerSrc: "./testdest.txt",
//   readableHighWaterMark: 1800,
//   writableHighWaterMark: 1800,
// });
// duplex.on("drain", () => {
//   duplex.resume();
// });
// console.time("completed");
// duplex.on("data", (chunk) => {
//   if (!duplex.write(chunk)) {
//     duplex.pause();
//   }
// });
// duplex.on("end", () => {
//   console.log("end");
//   duplex.end();
// });
// duplex.on("finish", () => {
//   console.timeEnd("completed");
// });
// duplex.on("close", () => {
//   console.log("close");
// });

// const reader = new myReadable({ src: "./longfile.txt", highWaterMark: 16000 });

// const writter = new myWritable({
//   writeSrc: "./testdest.txt",
//   highWaterMark: 16000,
// });

// writter.on("close", () => {
//   console.log("Closed");
// });

// writter.on("drain", () => {
//   console.log("Drained");
//   reader.resume();
// });

// writter.on("finish", () => {
//   console.log("Finished");
// });

// reader.on("data", (chunks) => {
//   const canTakeMore = writter.write(chunks);
//   console.log("canTakeMore", canTakeMore);
//   if (!canTakeMore) {
//     reader.pause();
//   }
// });

// console.time("start");
// readstream.on("data", (chunk) => {
//   if (!writestream.write(chunk)) {
//     readstream.pause();
//   }
// });

// writestream.on("drain", () => {
//   readstream.resume();
// });

// readstream.on("end", () => {
//   console.timeEnd("start");
// });

// function* transformFunc(data, signal) {
//   const newData = data
//     .map((chunk) => {
//       return chunk;
//     })
//     .forEach((chunkData) =>
//       chunkData.toString("utf8").replaceAll("Hi", "Namaste!")
//     );

//   return newData;
// }

// pipeline(readstream, writestream, (err, val) => {
//   console.log("ERrr", err);
//   console.log("Val", val);
// });

// console.log("Is Errored", Readable.isErrored(readstream));
// console.log("Is Errored", Readable.isReadable(readstream));

// finished(readstream, (err) => {
//   console.log("err", err);
// });

// readstream.on("end", () => {
//   console.log("Ended");
//   console.log("Is Errored", Readable.isReadable(readstream));

//   console.log("Is Distributed", Readable.isDisturbed(readstream));
// });
// readstream.on("close", () => {
//   console.log("Closed");
// });

// readstream.resume();
