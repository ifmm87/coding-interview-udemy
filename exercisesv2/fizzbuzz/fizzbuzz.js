
const fizzbuzz = (n) => {
  let array = [];
  for(let i = 1 ; i <= n ; i ++) {
    array[i-1] = `${i}`;
    if (i % 3 === 0 ) {
      array[i -1] = 'fizz';
    }
    if (i % 5 === 0) {
      array[i - 1] = array[i -1] + 'buzz';
    } 
  }
  console.log(array);
  return true;
}



module.exports = fizzbuzz
