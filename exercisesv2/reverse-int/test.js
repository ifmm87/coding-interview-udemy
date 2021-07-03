const reverseInt =  require('./reverse-int');

test('reverseInt is a function?' , () => {
  expect(typeof reverseInt).toEqual('function');
});

test('reverse 123' , () => {
  expect(reverseInt(123)).toEqual(321);
});

test('reverse -123' , () => {
  expect(reverseInt(-123)).toEqual(-321);
});

test('reverse -500' , () => {
  expect(reverseInt(-500)).toEqual(-5);
});

test('reverse 500' , () => {
  expect(reverseInt(500)).toEqual(5);
});
