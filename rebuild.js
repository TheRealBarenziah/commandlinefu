const existsSync = require("fs").existsSync;
const join = require("path").join;
const rimraf = require("rimraf").sync;

const rebuild = () => {
  // if './lib' exists, delete it
  if (existsSync(join(__dirname, "lib"))) {
    rimraf(join(__dirname, "lib"));
  }
  return null; // *Headpat V8*
};

rebuild();
