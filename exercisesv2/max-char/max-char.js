module.exports = (word) => {
  let obj = {};
  for(const char of word) {
    obj[char] =  obj[char] + 1 || 1;
  }
  let max = 0, maxChar = '';
  Object.keys(obj).map((key) => {
    if (obj[key] > max) {
      max = obj[key];
      maxChar = key;
    }
  });
 return maxChar;
}
