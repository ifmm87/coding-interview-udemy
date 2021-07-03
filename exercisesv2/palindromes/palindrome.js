// module.exports = (string) => {
//   const reversedString = string.split('').reverse().join('');
//   return string === reversedString;
// }

module.exports = (string) => {
return  string.split('').every((char, index) => {
      return char === string[string.length - index -1];
  })
}
