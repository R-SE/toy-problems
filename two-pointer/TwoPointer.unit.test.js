import { twoSum, removeDuplicates } from "./TwoPointer";

describe('twoSum', () => {
  test('normal case', () => {
    expect(twoSum([1, 2, 3, 4, 6], 6)).toEqual([1, 3]);
  });

  test('negative numbers', () => {
    expect(twoSum([-1, 5, -6, 2], -7)).toEqual([0, 2]);
  });

  test('no numbers satisfy', () => {
    expect(twoSum([1, 2, 3, 4, 5], 20)).toEqual([]);
  });

  test('empty array', () => {
    expect(twoSum([], 5)).toEqual([]);
  });

  test('multiple possible answers', () => {
    expect(twoSum([1, 2, 3, 4], 5)).toEqual([0, 3]);
  });
});

describe('removeDuplicates', () => {
  test('normal case', () => {
    expect(removeDuplicates([2, 3, 3, 3, 6, 9, 9])).toBe(4);
    expect(removeDuplicates([2, 2, 2, 11])).toBe(2);
    expect(removeDuplicates([-1, -1, 2, 2, 3, 3])).toBe(3);
  });

  test('empty case', () => {
    expect(removeDuplicates([])).toBe(0);
  });

  test('all duplicates', () => {
    expect(removeDuplicates([1, 1, 1, 1, 1, 1])).toBe(1);
  });
});