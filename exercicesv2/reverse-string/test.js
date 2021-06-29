const reverse = require("./reverse");

test("verifying if reverse is a function ", () => {
  expect(typeof reverse).toEqual("function");
});

test('reverse of "abc" must be "cba"', () => {
  expect(reverse("abc")).toEqual("cba");
});

test('reverse of "abc" is not "cssba"', () => {
  expect(reverse("abc")).not.toBe("cssba");
});
