// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   return str
//           .split('')
//           .reverse()
//           .join('');
// }
function reverse(str) {
  let reversed = '';
  for(let char of str) {
    reversed = char + reversed;
    debugger;
  }
  return reversed;
}

// function reverse(str) {
//   debugger;
//   return str.split('').reduce((reversed, character) => character + reversed);
// }
let res = reverse('ivanmujica');
console.log(res);
module.exports = reverse;
