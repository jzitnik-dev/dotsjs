#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const DotsCompiler = require("./compiler");

const command = process.argv[2];
const filePath = process.argv[3];

if (command == "compile") {
  let finalpath;
  if (filePath.startsWith("/") || filePath.startsWith("~")) {
    finalpath = filePath;
  } else {
    finalpath = path.join(process.cwd(), filePath);
  }

  const filename = filePath.split("/").at(-1);
  let newFileName

  if (filename.includes(".")) {
    newFileName = filename.split(".")
    newFileName[newFileName.length - 1] = "dots";
    newFileName = newFileName.join(".");
  } else {
    newFileName = filename + ".dots"
  }

  DotsCompiler.compileProject(finalpath).then((data) => {
    fs.writeFileSync(path.join(process.cwd(), newFileName), data);
  });
} else if (command == "run") {
  var filedata = fs.readFileSync(filePath, {
    encoding: "utf8",
    flag: "r",
  });
  DotsCompiler.run(filedata);
}
