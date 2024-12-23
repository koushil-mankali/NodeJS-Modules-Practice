import {
  brotliCompress,
  brotliDecompress,
  deflateSync,
  inflateSync,
  gunzipSync,
  gzipSync,
  unzipSync,
  inflateRawSync,
  deflateRawSync,
  constants,
  createBrotliCompress,
  crc32,
} from "node:zlib";

const originalStr = "Hello JS!";
console.log("originalStr", originalStr);
const bufferData = Buffer.from(originalStr, "utf-8");
console.log("bufferData", bufferData);

brotliCompress(bufferData, (err, res) => {
  console.log("ERR", err);
  console.log("RES", res);
  const brotliCompressObj = new createBrotliCompress({
    params: constants.BROTLI_DECODER_PARAM_LARGE_WINDOW,
  });

  brotliCompressObj.write(res);

  brotliCompressObj.on("data", (data) => {
    console.log("data", data);
  });
  brotliDecompress(res, (err, result) => {
    console.log("ERR", err);
    console.log("Result", result.toString("utf8"));
  });
});

console.log("=======================================");

const deflateData = deflateSync(bufferData);
console.log("deflateData", deflateData);
const inflateData = inflateSync(deflateData);
console.log("inflateData", inflateData);
console.log("inflateDataOriginal", inflateData.toString("utf8"));

console.log("=======================================");

const gzipData = gzipSync(bufferData);
console.log("gzipData", gzipData);
const gunzipData = gunzipSync(gzipData);
console.log("gunzipData", gunzipData, gunzipData.toString("utf8"));
const unzipData = unzipSync(gzipData);
console.log("unzipData", unzipData, unzipData.toString("utf8"));
const unzipdeflateDataData = unzipSync(deflateData);
console.log(
  "unzipdeflateDataData",
  unzipdeflateDataData,
  unzipdeflateDataData.toString("utf8")
);

console.log("=======================================");

const deflateRawSyncData = deflateRawSync(bufferData);
console.log("deflateRawSyncData", deflateRawSyncData);
const infalteRawSyncData = inflateRawSync(deflateRawSyncData);
console.log(
  "infalteRawSyncData",
  infalteRawSyncData,
  infalteRawSyncData?.toString("utf-8")
);

console.log("=======================================");

console.log("Constants", constants.BROTLI_DECODE);

console.log("=======================================");
const crc32Data = crc32(bufferData);
console.log("crc32Data", crc32Data);
console.log("=======================================");
