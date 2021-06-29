/**
 * @function verify if string A is anagram of stringB
 * @param strinA string A
 * @param stringB  string to be compare to
 * @returns boolean if stringA is anagram of stringB
 */
const anagram = (stringA, stringB) => {
  return cleanString(stringA) === cleanString(stringB);
}

/**
 * @function verify if string A is anagram of stringB
 * @param strinA string A
 * @param stringB  string to be compare to
 * @returns boolean if stringA is anagram of stringB
 */
const anagram2 = (stringA, stringB) => {
  const flag = true;
  const oStringA = countChars(stringA);
  const oStringB = countChars(stringB);
  if (Object.keys(countChars(stringA)).length !== Object.keys(countChars(stringB)).length)
      return false;
  console.log(oStringA, oStringB);
  for(let key in oStringA ) {
      if (oStringA[key] !== oStringB[key])
        return false;
  }
  return true;
}

/**
 * @function clean a string and transform to lowe case
 * @param string the string to be clean
 * @returns string clean string
 */
const cleanString = (string) => {
  return string.toLowerCase()
    .replace(/[^\w]/g, '')
    .split('')
    .sort()
    .join('');
}

/**
 * @function count chars in a string
 * @param string the string to be count
 * @returns object
 */
const countChars = (string) => {
  const object = {};
  string.split('').map(char => {
    object[char] = object[char] + 1 || 1;
  });
  return object;
}

module.exports = {
  anagram,
  anagram2
}

