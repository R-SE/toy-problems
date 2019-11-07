import { kDistinct, longestUnique, longestSubstringWithReplacement, binaryK, hasPermutation, findAnagrams, smallestSubstring, concat } from "./SlidingWindow.js";

describe('kDistinct', () => {
  test('normal case', () => {
    expect(kDistinct('abcababcd', 2)).toBe(4);
  });

  test('empty string', () => {
    expect(kDistinct('', 5)).toBe(0);
  });

  test('zero or negative k', () => {
    expect(kDistinct('ksdjfds', -1)).toBe(0);
    expect(kDistinct('ksdjfds', 0)).toBe(0);
  });

  test('case sensitivity', () => {
    expect(kDistinct('AaAaccc', 1)).toBe(3);
  });

  test('string has fewer unique characters than k', () => {
    expect(kDistinct('abcd', 5)).toBe(4);
  });
});

describe('longestUnique', () => {
  test('normal case', () => {
    expect(longestUnique('abkcadaebfik')).toBe(7);
  });

  test('empty case', () => {
    expect(longestUnique('')).toBe(0);
  });

  test('case sensitivity', () => {
    expect(longestUnique('abcABC')).toBe(6);
  });

  test('string has spaces or punctuation', () => {
    expect(longestUnique(' kjrf+ l+9 Fz')).toBe(7);
  });
});

describe('longestSubstringWithReplacement', () => {
  test('normal case', () => {
    expect(longestSubstringWithReplacement('abbabc', 2)).toBe(5);
  });

  test('bad greedy replacements', () => {
    expect(longestSubstringWithReplacement('aabbaabbbb', 2)).toBe(8);
  });

  test('empty string', () => {
    expect(longestSubstringWithReplacement('', 1)).toBe(0);
  });

  test('zero replacements', () => {
    expect(longestSubstringWithReplacement('abcaa', 0)).toBe(2);
  });

  test('case sensitivity', () => {
    expect(longestSubstringWithReplacement('aAabb', 0)).toBe(2);
  });
});

describe('binaryK', () => {
  test('normal case', () => {
    expect(binaryK([1, 0, 1, 0, 1, 1, 0, 1, 1], 2)).toBe(7);
  });

  test('empty array', () => {
    expect(binaryK([], 4)).toBe(0);
  });

  test('zero k', () => {
    expect(binaryK([0, 1, 0, 1, 1], 0)).toBe(2);
  });

  test('single character', () => {
    expect(binaryK([0], 1)).toBe(1);
  });
});

describe('hasPermutation', () => {
  test('normal positive case', () => {
    expect(hasPermutation('abcd', 'cdb')).toBeTruthy();
  });

  test('normal negative case', () => {
    expect(hasPermutation('abcdef', 'fa')).toBeFalsy();
  });

  test('empty string(s)', () => {
    expect(hasPermutation('', 'abc')).toBeFalsy();
    expect(hasPermutation('abc', '')).toBeFalsy();
  });

  test('substring longer than string', () => {
    expect(hasPermutation('abc', 'abcd')).toBeFalsy();
  });
});

describe('findAnagrams', () => {
  test('positive case - multiple matches', () => {
    expect(findAnagrams('abab', 'ab')).toEqual([0, 1, 2]);
  });
  
  test('empty strings', () => {
    expect(findAnagrams('', 'sdkf')).toEqual([]);
    expect(findAnagrams('sdf', '')).toEqual([]);
  });

  test('pattern longer than str', () => {
    expect(findAnagrams('sdf', 'sdfsdf')).toEqual([]);
  });

  test('case insensitivity', () => {
    expect(findAnagrams('aBc', 'ABC')).toEqual([0]);
  });
});

describe('smallestSubstring', () => {
  test('positive case', () => {
    expect(smallestSubstring('eaffbc', 'cbe')).toBe('eaffbc');
    expect(smallestSubstring('abbbbbcdefffffbedca', 'abcde')).toBe('bedca');
  });

  test('equal strings', () => {
    expect(smallestSubstring('abc', 'bca')).toBe('abc');
  });

  test('negative case', () => {
    expect(smallestSubstring('abcde', 'dex')).toBe('');
  });

  test('duplicate chars in pattern', () => {
    expect(smallestSubstring('abc', 'aaaabc')).toEqual('');
  });

  test('empty strings', () => {
    expect(smallestSubstring('', 'lol')).toBe('');
    expect(smallestSubstring('abc', '')).toBe('');
  });

  test('case insensitivity', () => {
    expect(smallestSubstring('aBc', 'ABC')).toBe('aBc');
  });
});

describe('concat', () => {
  test('normal case', () => {
    expect(concat('catfoxcat', ['cat', 'fox'])).toEqual([0, 3]);
  });

  test('empty args', () => {
    expect(concat('catefox', [])).toEqual([]);
    expect(concat('', ['cat', 'fox'])).toEqual([]);
  });

  test('overlaps to function correctly', () => {
    expect(concat('snowmanball', ['snow', 'wman', 'ball'])).toEqual([]);
    expect(concat('snowmanballsnow', ['snow', 'wman', 'ball'])).toEqual([3]);
  });

  test('single letter strings', () => {
    expect(concat('abcd', ['a', 'b', 'c', 'd'])).toEqual([0]);
  });

  test('lots of duplicates', () => {
    expect(concat('catfoxcatfoxcatcatfoxfoxcat', ['cat', 'fox'])).toEqual([0, 3, 6, 9, 15, 21]);
  });

  test('duplicate words', () => {
    expect(concat('catdogcat', ['dog', 'cat', 'cat'])).toEqual([0]);
    expect(concat('catdog', ['cat', 'cat', 'dog'])).toEqual([]);
  });

  test('bad greedy jump', () => {
    expect(concat('aaabb', ['aa', 'bb'])).toEqual([1]);
    expect(concat('aaabbdbbaaabbaa', ['aa', 'bb'])).toEqual([1, 6, 9, 11]);
  });
});
