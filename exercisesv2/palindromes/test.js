/**
 * palindromes algotitm
 */
const palindrome =  require('./palindrome');
test('palindrome function exists', () => {
  expect(typeof palindrome).toEqual('function');
})

test('verifying palindrome', () => {
  expect(palindrome('abba')).toBeTruthy();
});
test('verifying palindrome', () => {
  expect(palindrome('ivvi')).toBeTruthy();
});

test('verifying that is not a palindrome', () => {
  expect(palindrome('abbahhha')).toBeFalsy();
});
