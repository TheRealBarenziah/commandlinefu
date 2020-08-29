const path = require("path");

test("commandlinefu using require", async () => {

  expect(
    await commandlinefu("random").then((res) => res.length),
  ).toBe(1);
});