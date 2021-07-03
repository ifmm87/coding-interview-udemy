/**
 * @function reverseInt reverses an integer
 */
module.exports = (integer) => {
  return Math.sign(integer) * parseInt(integer.toString().split("").reverse().join(""));
};
