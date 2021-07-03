// module.exports = (string) => {
//   let array = [];
//   const vowels = string.split('').filter(char => {
//     if (['a', 'e', 'i', 'o', 'u'].includes(char)) return char;
//   });
//   console.log(vowels)
//   return vowels;
// }
//
module.exports = (string) => {
  const vowels = string.match(/[aeiou]/gi);
  return vowels ? vowels.length : 0;
}
