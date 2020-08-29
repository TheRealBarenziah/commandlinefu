const clfu = require("./lib/cjs");
const x = [
  {
    id: "2442",
    command: 'grep -2 -iIr "err\\|warn\\|fail\\|crit" /var/log/*',
    summary: "Get all possible problems from any log files",
    votes: "6",
    url:
      "http://www.commandlinefu.com/commands/view/2442/get-all-possible-problems-from-any-log-files",
  },
];

const doesObjectLooksOkay = (object) => {
  const keysItShouldHave = ["id", "command", "summary", "votes", "url"];
  const keysItHave = Object.keys(...object);
  console.log("keysItHave ", keysItHave);
  console.log(
    "keysItShouldHave.length === keysItHave.length ",
    keysItShouldHave.length === keysItHave.length,
  );
  console.log(
    "keysItShouldHave.every((value, index) => value === keysItHave[index]",
    keysItShouldHave.every((value, index) => value === keysItHave[index]),
  );

  return keysItShouldHave.length === keysItHave.length &&
    keysItShouldHave.every((value, index) => value === keysItHave[index])
    ? true // "Souka."  https://stackoverflow.com/a/19746771/11894221
    : false;
};

clfu("popular").then((res) => console.log(res));
