// Given a string, find the length of the longest substring in it with at most k distinct characters.
export function kDistinct(string, k) {
  if (k < 1) {
    return 0;
  }

  let max = 0;
  let start = 0;
  const frequencies = {};
  for (let end = 0; end < string.length; end++) {
    frequencies[string[end]] = (frequencies[string[end]] || 0) + 1;
    while(Object.keys(frequencies).length > k) {
      frequencies[string[start]]--;
      if (!frequencies[string[start]]) {
        delete frequencies[string[start]];
      }
      start++;
    }
    max = Math.max(max, end - start + 1);
  }
  return max;
}

// Given a string, find the length of the longest substring which has no repeating characters.
export function longestUnique(string) {
  const chars = {};
  let max = 0;
  let start = 0;
  for (let end = 0; end < string.length; end++) {
    const char = string[end];
    if (char in chars) {
      start = Math.max(start, chars[char] + 1);
    }
    max = Math.max(max, end - start + 1);
    chars[char] = end;
  }
  return max;
}

// Given a string with lowercase letters only, if you are allowed to replace no more than ‘k’ letters with any letter, find the length of the longest substring having the same letters after replacement.

export function longestSubstringWithReplacement(string, k) {
  let max = 0;
  let start = 0
  let maxFrequency = 0;
  const frequencies = {};

  for (let end = 0; end < string.length; end++) {
    frequencies[string[end]] = (frequencies[string[end]] || 0) + 1;
    maxFrequency = Math.max(maxFrequency, frequencies[string[end]]);

    if (end - start + 1 - maxFrequency > k) {
      frequencies[string[start++]]--;
    }

    max = Math.max(max, end - start + 1);
  }

  return max;
}
