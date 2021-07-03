const reverse = require("./reverse");

test("verifying if reverse is a function ", () => {
  expect(typeof reverse.reverse).toEqual("function");
});

test('reverse of "abc" must be "cba"', () => {
  expect(reverse.reverse2("abc")).toEqual("cba");
});

test('reverse of "abc" is not "cssba"', () => {
  expect(reverse.reverse("abc")).not.toBe("cssba");
});
