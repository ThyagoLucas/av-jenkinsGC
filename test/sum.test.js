import {sum} from '../src/sum.js';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
 
});

test('sub 1 - 2 not to equal 0', () => {
  expect(sum(1,-2)).not.toBe(0);
});

test('sub 6 - 2 to equal 4', () => {
  expect(sum(6,-2)).toBe(4);
});


