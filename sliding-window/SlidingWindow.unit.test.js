import { kDistinct, longestUnique, longestSubstringWithReplacement } from "./SlidingWindow.js";

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