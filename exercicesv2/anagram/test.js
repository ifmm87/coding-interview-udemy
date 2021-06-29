const anagrams = require('./solution.js');
test('anagrams function exist?', () => {
  expect(typeof anagrams.anagram).toEqual('function');
});

test ('"ivan" is an anagram of navin', () =>{
  expect(anagrams.anagram('ivan', 'navi')).toBeTruthy();
});

test('"abc" is not an anagram of "jok"', () =>{
  expect(anagrams.anagram('abc','jok')).toBeFalsy();
});

test('"ivanmujica" is anagram of "mjicadivan"', () => {
  expect(anagrams.anagram2('ivanmujica', 'mujicaivan')).toBeTruthy();
})

test('"ever" is not anagram of "redo"', () =>{
  expect(anagrams.anagram2('ever', 'redo')).toBeFalsy();
})
