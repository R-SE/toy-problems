import {
  twoSum,
  removeDuplicates,
  removeKeys,
  squareNums,
  tripletSum,
  tripletSumCloseToTarget,
  tripletWithSmallerSum 
} from "./TwoPointer";

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

describe('removeKeys', () => {
  test('normal case', () => {
    expect(removeKeys([3, 2, 3, 6, 3, 10, 9, 3], 3)).toBe(4);
    expect(removeKeys([2, 11, 2, 2, 1], 2)).toBe(2);
  });

  test('empty array', () => {
    expect(removeKeys([], 1)).toBe(0);
  });

  test('key not in array', () => {
    expect(removeKeys([1, 2, 3, 4], 5)).toBe(4);
  });

  test('all elements are key', () => {
    expect(removeKeys([1, 1, 1, 1, 1, 1], 1)).toBe(0);
  });
});

describe('squareNums', () => {
  test('normal case', () => {
    expect(squareNums([-2, -1, 0, 2, 3])).toEqual([0, 1, 4, 4, 9]);
    expect(squareNums([-3, -1, 0, 1, 2])).toEqual([0, 1, 1, 4, 9])
  });

  test('duplicates', () => {
    expect(squareNums([-5, -5, -4, 0, 2, 2])).toEqual([0, 4, 4, 16, 25, 25]);
    expect(squareNums([2, 2, 2, 2, 2])).toEqual([4, 4, 4, 4, 4]);
  });

  test('empty array', () => {
    expect(squareNums([])).toEqual([]);
  });

  test('single element', () => {
    expect(squareNums([1])).toEqual([1]);
  });
});

describe('tripletSum', () => {
  test('normal case', () => {
    expect(tripletSum([-3, 0, 1, 2, -1, 1, -2])).toEqual([[-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]]);
    expect(tripletSum([-5, 2, -1, -2, 3])).toEqual([[-5, 2, 3], [-2, -1, 3]]);
  });

  test('answers at end', () => {
    expect(tripletSum([-10, -10, -10, -1, -4, 5])).toEqual([[-4, -1, 5]]);
  });

  test('no triplet satisfies conditions', () => {
    expect(tripletSum([-1, 2, 0, 4, 5])).toEqual([]);
  });

  test('empty array or array less than 3', () => {
    expect(tripletSum([])).toEqual([]);
    expect(tripletSum([0])).toEqual([]);
    expect(tripletSum([1, -1])).toEqual([]);
  });
});

describe('tripletSumCloseToTarget', () => {
  test('no triplets', () => {
    expect(tripletSumCloseToTarget([], 5)).toBeNull();
    expect(tripletSumCloseToTarget([1], 5)).toBeNull();
    expect(tripletSumCloseToTarget([1, 2], 5)).toBeNull();
  });

  test('normal case', () => {
    expect(tripletSumCloseToTarget([-2, 0, 1, 2], 2)).toBe(1);
    expect(tripletSumCloseToTarget([-3, -1, 1, 2], 1)).toBe(0);
    expect(tripletSumCloseToTarget([1, 1, 1], 100)).toBe(3);
   expect(tripletSumCloseToTarget([1, 2, 3, -10, 14, 0], 10)).toBe(7);
  });

  test('multiple possible answers', () => {
    expect(tripletSumCloseToTarget([1, 1, 1, 5, 0, 0], 4)).toBe(3);
  });

  test('exact match', () => {
    expect(tripletSumCloseToTarget([1, 2, 3, 7, 9, 14, -10, 14, 0], 10)).toBe(10);
  });
});

describe('tripletWithSmallerSum', () => {
  test('normal case', () => {
    expect(tripletWithSmallerSum([-1, 0, 2, 3], 3)).toBe(2);
    expect(tripletWithSmallerSum([-1, 4, 2, 1, 3], 5)).toBe(4);
  });

  test('no triplets', () => {
    expect(tripletWithSmallerSum([], 5)).toBe(0);
    expect(tripletWithSmallerSum([1], 5)).toBe(0);
    expect(tripletWithSmallerSum([1, 2], 5)).toBe(0);
  });

  test('no qualifying subsets', () => {
    expect(tripletWithSmallerSum([5, 6, 9, 22, 3, 43, 234], 1)).toBe(0);
  });

  test('triplets exactly equal but not less', () => {
    expect(tripletWithSmallerSum([5, 5, 5], 15)).toBe(0);
  });
});
