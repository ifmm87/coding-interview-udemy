const reverse = (string) => {
  return string.split('').reverse().join('');
}
const reverse2  = (string) => {
  let reversed = '';
  for (let char of string) {
    reversed = char + reversed;
  }
  console.log(reversed);
  return reversed;
};

module.exports = {
  reverse,
  reverse2
}
