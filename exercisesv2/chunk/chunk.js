// module.exports = (array, size) => {
//   let chunked = [];
//   let partialChunk = [];
//   for (let element of array) {
//     if (partialChunk.length < size ) {
//       partialChunk.push(element);
//     } else {
//       chunked.push(partialChunk);
//       partialChunk = [element];
//     }
//   }
//   if (partialChunk.length) chunked.push(partialChunk);
//   return chunked;
// }
//
// module.exports = (array, size) => {
//   let chunked = [];
//   lastChunked = [];
//   for(const elem of array) {
//     lastChunked = chunked[chunked.length - 1];
//     if (!lastChunked || lastChunked.length === size) {
//       chunked.push([elem]);
//     } else {
//       lastChunked.push(elem);
//     }
//   }
//   return chunked;
// }
module.exports = (array, size) => {
  const chunked = [];
  let index = 0;
  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }
  return chunked;
}
