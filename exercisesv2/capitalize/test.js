const capitalize = require("./capitalize");

test("function exists?", () => {
  expect(typeof capitalize).toEqual("function");
});

test("ivan fernando mujica mamani", () => {
  expect(capitalize('ivan fernando mujica mamani'))
    .toEqual("Ivan Fernando Mujica Mamani");
});

