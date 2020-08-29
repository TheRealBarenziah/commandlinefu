/**
 * @jest-environment node
 */
// bc https://github.com/axios/axios/issues/1754
const path = require("path");
const commandlinefu = require("../../lib/cjs");

const doesObjectLooksOkay = (object) => {
  const keysItShouldHave = ["id", "command", "summary", "votes", "url"];
  const keysItHave = Object.keys({ ...object });

  return keysItShouldHave.length === keysItHave.length &&
    keysItShouldHave.every((value, index) => value === keysItHave[index])
    ? true // "Souka."  https://stackoverflow.com/a/19746771/11894221
    : false;
};

test("no arg using require", async () => {
  expect(await commandlinefu().then((res) => doesObjectLooksOkay(res))).toBe(
    true,
  );
});

test("'popular' arg using require", async () => {
  expect(
    await commandlinefu("popular").then((res) => doesObjectLooksOkay(res[0])),
  ).toBe(true);
});

test("search:grep using require", async () => {
  expect(
    await commandlinefu("search:grep").then((res) =>
      doesObjectLooksOkay(res[0]),
    ),
  ).toBe(true);
});
