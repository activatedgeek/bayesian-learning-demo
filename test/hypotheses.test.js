import {
  isMultipleOf,
  endsIn,
  isPowerOf,
  isSquare,
  isPowerOf2Minus32,
  isPowerOf2Plus37
} from '../src/js/utils/hypotheses';

it('isMultipleOf 2 works correctly', () => {
  const isMultipleOfTwo = isMultipleOf(2);
  expect(isMultipleOfTwo(2)).toBe(true);
  expect(isMultipleOfTwo(10)).toBe(true);
  expect(isMultipleOfTwo(5)).toBe(false);
});

it('isMultipleOf 9 works correctly', () => {
  const isMultipleOfNine = isMultipleOf(9);
  expect(isMultipleOfNine(9)).toBe(true);
  expect(isMultipleOfNine(10)).toBe(false);
  expect(isMultipleOfNine(99)).toBe(true);
});

it('endsIn 3 works correctly', () => {
  const endsInThree = endsIn(3);
  expect(endsInThree(2)).toBe(false);
  expect(endsInThree(43)).toBe(true);
  expect(endsInThree(93)).toBe(true);
});

it('endsIn 8 works correctly', () => {
  const endsInEight = endsIn(8);
  expect(endsInEight(2)).toBe(false);
  expect(endsInEight(43)).toBe(false);
  expect(endsInEight(98)).toBe(true);
});

it('isPowerOf 5 works correctly', () => {
  const isPowerOfFive = isPowerOf(5);
  expect(isPowerOfFive(10)).toBe(false);
  expect(isPowerOfFive(50)).toBe(false);
  expect(isPowerOfFive(125)).toBe(true);
});

it('isSquare works correctly', () => {
  expect(isSquare(4)).toBe(true);
  expect(isSquare(200)).toBe(false);
  expect(isSquare(1024)).toBe(true);
});

it('isPowerOf2Minus32 works correctly', () => {
  expect(isPowerOf2Minus32(2)).toBe(true);
  expect(isPowerOf2Minus32(32)).toBe(false);
  expect(isPowerOf2Minus32(16)).toBe(true);
});

it('isPowerOf2Plus37 works correctly', () => {
  expect(isPowerOf2Plus37(2)).toBe(true);
  expect(isPowerOf2Plus37(19)).toBe(false);
  expect(isPowerOf2Plus37(37)).toBe(true);
});
