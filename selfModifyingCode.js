const fs = require("fs");
const readline = require("readline");

/*
Start to write an HERETIC workaround for the "export = module" vs "export default module" problem
Imma first compile .cjs with "export = module"
... then modify this line into "export default module"
... then compile into .mjs
... then remodify the line into "export = module"

As the youth says: YOLO !

I will patch it once I figured the clean/TS/intended way to do it.
*/

const file = readline.createInterface({
  input: fs.createReadStream("./src/index.ts"),
  output: process.stdout,
  terminal: false,
});

file.on("line", (line) => {
  console.log("line: ", line);
});
