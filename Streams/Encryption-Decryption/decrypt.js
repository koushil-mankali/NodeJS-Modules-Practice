import { Transform } from "node:stream";
import { createReadStream, createWriteStream, stat } from "node:fs";

const srcFile = "./encoded.txt";

class Decrypt extends Transform {
  constructor(options) {
    super(options);
  }

  _construct(callback) {
    this.totalSize = 0;
    this.completedSize = 0;
    this.percentAgeCompleted = 0;

    stat(srcFile, (err, fstat) => {
      this.totalSize = fstat.size;
    });

    callback();
  }
  _transform(chunk, encoding, callback) {
    this.completedSize += chunk.byteLength;
    for (let i = 0; i < chunk.length; i++) {
      if (chunk[i] != 255) {
        chunk[i] -= 1;
      }
    }
    callback(null, chunk);
    this.percentAgeCompleted = parseFloat(
      (this.completedSize / this.totalSize) * 100
    ).toFixed(2);
    console.log(
      "Decryption Percentage Completed",
      this.percentAgeCompleted + " %"
    );
  }

  _flush(callback) {
    callback();
  }
}

const decryptData = new Decrypt({
  readableHighWaterMark: 65536,
  writableHighWaterMArk: 65536,
});

const readStream = createReadStream(srcFile);
const writeStream = createWriteStream("./decoded.txt");

readStream.on("data", (chunk) => {
  decryptData.write(chunk);
});

decryptData.on("data", (chunk) => {
  writeStream.write(chunk);
});
