const espiral = require('./espiral');

test('whatever', () => {
  expect(typeof espiral).toEqual('function')
});

test('first', () => {
  expect(espiral(5)).toEqual([[1,2,3,4,5], [1,2,3,4,5]])
})
