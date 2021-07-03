module.exports = (N) => {
  let matrix = [];
  let array = [];
  for (let i = 1; i <= N; i++) {
    array = Array.from(new Array(N),(val,index) => index + 1) ;
    matrix.push(array);
  }
  console.log(matrix)
  return matrix;
}
