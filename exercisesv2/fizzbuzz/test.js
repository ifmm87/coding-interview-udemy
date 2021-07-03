const fizzbuzz = require('./fizzbuzz');
test('fizzbuzz function exist?', () => {
  expect(typeof fizzbuzz).toEqual('function');
});

test('printing ', () => {
  expect(fizzbuzz(78)).toBeTruthy();
})
