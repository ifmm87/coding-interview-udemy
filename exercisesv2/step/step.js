// module.exports = (num) => {
//   let str = '';
//   for (let i = 1; i <= num; i++) {
//     str += '#';
//     console.log(str + ' '.repeat(num - i));
//   }
// };
// module.exports = (num) => {
//   let str = '';
//   for (let i = 1; i <= num; i++) {
//     str += '#';
//     console.log(str + ' '.repeat(num - i));
//   }
// };
//
// function step(n, first = true) {
//   if (n === 0) {
//     return n;
//   }
//   if (!first)  n = n - 1;
//   return n + step(n, false);
// }
function step (n, row = 1) {
  const char = '#';
  console.log();
  if (row === n) {
    return char.repeat(row) + ' '.repeat(n - row);
  }
  step(n, row + 1);
}

module.exports = step;
