/**
 * TEST for chunk algorithm
 */
const chunk = require('./chunk');
test('function exists', () => {
  expect(typeof chunk).toEqual('function');
});


test('chunk divides an array of 10 elements with chunk size 2', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const chunked = chunk(arr, 2);
  expect(chunked).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]);
});

test('chunk divides an array of 10 elements with chunk size 2', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const chunked = chunk(arr, 3);
  expect(chunked).toEqual([[1, 2, 3], [ 4, 5, 6], [7, 8, 9], [10]]);
});
