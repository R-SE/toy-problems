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

// Given an array containing 0s and 1s, if you are allowed to replace no more than ‘k’ 0s with 1s, find the length of the longest contiguous subarray having all 1s.
export function binaryK(array, k) {
  let replacements = 0;
  let max = 0;
  let start = 0;
  for (let end = 0; end < array.length; end++) {
    if (array[end] === 0) {
      replacements++;
    }
    while (replacements > k) {
      if (array[start++] === 0) {
        replacements--;
      }
    }
    max = Math.max(max, end - start + 1);
  }

  return max;
}

// Given a string and a pattern, find out if the string contains any permutation of the pattern.
export function hasPermutation(str, substr) {
  if (substr.length > str.length || !substr.length || !str.length) {
    return false;
  }
  const chars = {};
  for (let char of substr) {
    chars[char] = (chars[char] || 0) + 1;
  }

  let start = 0;
  let end = 0;

  while (end + 1 <= substr.length) {
    chars[str[end]] = (chars[str[end]] || 0) - 1;
    if (chars[str[end]] === 0) {
      delete chars[str[end]];
    }
    end++;
  }

  while (end <= str.length) {
    if (Object.keys(chars).length === 0) {
      return true;
    }

    chars[str[end]] = (chars[str[end]] || 0) - 1;
    if (chars[str[end]] === 0) {
      delete chars[str[end]];
    }

    chars[str[start]] = (chars[str[start]] || 0) + 1;
    if (chars[str[start]] === 0) {
      delete chars[str[start]];
    }

    start++;
    end++;
  }

  return false;
}

