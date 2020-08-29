const existsSync = require("fs").existsSync;
const join = require("path").join;
const rimraf = require("rimraf").sync;

// if './lib' exists, delete it
const rebuild = () => {
  if (existsSync(join(__dirname, "lib"))) {
    rimraf(join(__dirname, "lib"));
  }
  return null;
};

rebuild();
