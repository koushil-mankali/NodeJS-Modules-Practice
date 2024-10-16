import {
  posix,
  win32,
  basename,
  delimiter,
  dirname,
  extname,
  parse,
  format,
  matchesGlob,
  isAbsolute,
  join,
  normalize,
  sep,
  relative,
  resolve,
  toNamespacedPath,
} from "node:path";

console.log("BaseName:", basename("./testFol/test.txt"));
console.log("Posix BaseName:", posix.basename("./testFol/test.txt"));
console.log("Win32 BaseName:", win32.basename("./testFol/test.txt"));
console.log("==================================");
console.log("Delimiter:", delimiter);
console.log("Posix Delimiter:", posix.delimiter);
console.log("Win32 Delimiter:", win32.delimiter);
console.log("==================================");
console.log("Dirname:", dirname("./testFol/test.txt"));
console.log("Posix Dirname:", posix.dirname("./testFol/test.txt"));
console.log("Win32 Dirname:", win32.dirname("./testFol/test.txt"));
console.log("==================================");
console.log("ExtName:", extname("./testfol/test.txt"));
console.log("ExtName:", extname("./testfol/test"));
console.log("Posix ExtName:", posix.extname("./testfol/test.txt"));
console.log("Win32 ExtName:", win32.extname("./testfol/test.txt"));
console.log("==================================");
const parsed = parse("/testfol/testsub1/test.txt");
console.log("Parsed:", parsed);
console.log("Posix Parsed:", posix.parsed);
console.log("Win32 Parsed:", win32.parsed);
console.log("==================================");
console.log("Format:", format(parsed));
console.log("Posix Format:", posix.format(parsed));
console.log("Win32 Format:", win32.format(parsed));
console.log("==================================");
console.log("Matches Glob:", matchesGlob("filefol/file.txt", "/file.txt"));
console.log(
  "Posix Matches Glob:",
  posix.matchesGlob("filefol/file.txt", "/file.txt")
);
console.log(
  "Win32 Matches Glob:",
  win32.matchesGlob("filefol/file.txt", "/file.txt")
);
console.log("==================================");
console.log(
  "Matches Glob:",
  matchesGlob("filefol/file.txt", "*/file.tx+(t|p)")
);
console.log(
  "Posix Matches Glob:",
  posix.matchesGlob("filefol/file.txt", "*/file.tx+(t|p)")
);
console.log(
  "Win32 Matches Glob:",
  win32.matchesGlob("filefol/file.txt", "*/file.tx+(t|p)")
);
console.log("==================================");
console.log("Absolute:", isAbsolute("./test.txt"));
console.log("Posix Absolute:", posix.isAbsolute("./test.txt"));
console.log("Win32 Absolute:", win32.isAbsolute("./test.txt"));
console.log("==================================");
console.log("Absolute:", isAbsolute("/test.txt"));
console.log("Posix Absolute:", posix.isAbsolute("/test.txt"));
console.log("Win32 Absolute:", win32.isAbsolute("/test.txt"));
console.log("==================================");
const path1 = "/test.txt";
const path2 = "./root/filfol/file1/";
const path3 = "..";
console.log("Join:", join(path2, path3, path1));
console.log("Posix Join:", posix.join(path2, path3, path1));
console.log("Win32 Join:", win32.join(path2, path3, path1));
console.log("==================================");
const pathwithUnnormal = "//test//\\see//testfile/fol//test.txt";
console.log("Normalize: ", normalize(pathwithUnnormal));
console.log("Posix Normalize: ", posix.normalize(pathwithUnnormal));
console.log("Win32 Normalize: ", win32.normalize(pathwithUnnormal));
console.log("==================================");
console.log("Separator: ", sep);
console.log("Posix Separator: ", posix.sep);
console.log("Win32 Separator: ", win32.sep);
console.log("==================================");
const rpath1 = "oriendo/path/too2/file.txt";
const rpath2 = "oriendo/path/too1/file2.txt";
console.log("Relative: ", relative(rpath1, rpath2));
console.log("Posix Relative: ", posix.relative(rpath1, rpath2));
console.log("Win32 Relative: ", win32.relative(rpath1, rpath2));
console.log("==================================");
const apath1 = "oriendo/path/";
const apath2 = "too1/file2.txt";
console.log("Resolve: ", resolve(apath1, apath2));
console.log("Posix Resolve: ", posix.resolve(apath1, apath2));
console.log("Win32 Resolve: ", win32.resolve(apath1, apath2));
console.log("==================================");
console.log("toNamespacedPath", toNamespacedPath("C:"));
console.log("==================================");
