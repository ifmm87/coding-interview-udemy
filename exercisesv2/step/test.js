const step =  require ('./step');
beforeEach(() => {
  jest.spyOn(console, 'log');
})
it('function?', () => {
  expect(typeof step).toEqual('function');
});

test('5', () => {
  // expect(step(5)).toEqual(15);
  step(5);
  expect(console.log.mock.calls[0][0]).toEqual('#    ');
  expect(console.log.mock.calls[1][0]).toEqual('##   ');
  expect(console.log.mock.calls[4][0]).toEqual('#####');

})

