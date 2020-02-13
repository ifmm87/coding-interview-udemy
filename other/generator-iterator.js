function* numbers() {
  let multiply = 2;
  let count = 0;
  while (true) {
    yield count * multiply ;
    count ++;
    count ++;
  }
}
const generator = numbers();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
