const vowel = require('./vowel');


test('is a function', () => {
  expect(typeof vowel).toEqual('function');
})


test('ivanmujica', () => {
  expect(vowel('ivanmujica')).toEqual(5);
});

test('wrwerwerw', () => {
  expect(vowel('wwwwwwwwww')).toEqual(0);
});
