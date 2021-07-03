const maxChar = require('./max-char');
test('is a function', () => {
  expect(typeof maxChar).toEqual('function');
});

test('max char of fuuuuunction', () => {
  expect(maxChar('fuuuuuunction')).toEqual('u');
});
