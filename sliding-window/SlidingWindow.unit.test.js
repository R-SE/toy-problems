import { kDistinct, longestUnique } from "./SlidingWindow.js";

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
