// module.exports = (string) => {
//   // split string
//   const words = string.split(' ');
//   const words2 = [];
//   words.map((word, index) => {
//     words2.push(word[0].toUpperCase() + word.slice(1, word.length));
//   });
//   console.log(words2)
//   return words2.join(' ');
// }

module.exports = (string) => {
  let result = string[0].toUpperCase();
  string.split('').forEach((value, index) => {
    if (index === 0) return;
    if (string[index - 1] === ' ') {
      result += value.toUpperCase();
    } else {
      result += value;
    }
  });

  return result;
}


// module.exports = (string) => {
//   let indexes = [];
//   indexes = string.split('').map((value, index)  => {
//     if (value === ' ' || index === 0) return index;
//   })
//   console.log(indexes);
// }
