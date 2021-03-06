const exportHelper = require("export-helper");

const updateExport = () => {
  if (process.argv.slice(2)[0] === "es5") {
    exportHelper({ mode: "es5", path: "src/index.ts", silent: true }).then(
      (res) => res,
    );
  } else if (process.argv.slice(2)[0] === "es6") {
    exportHelper({ mode: "es6", path: "src/index.ts", silent: true }).then(
      (res) => res,
    );
  }
};

updateExport();
