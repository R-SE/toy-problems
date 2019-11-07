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

// Given a string and a pattern, find all anagrams of the pattern in the given string and return their starting indices.

export function findAnagrams(str, pattern) {
  if (!str.length || !pattern.length || str.length < pattern.length) {
    return [];
  }

  str = str.toLowerCase();
  pattern = pattern.toLowerCase();

  const frequencies = {};
  for (let char of pattern) {
    frequencies[char] = (frequencies[char] || 0) + 1;
  }

  const matchIndices = [];
  let start = 0;

  for (let end = 0; end < str.length; end++) {
    const char = str[end];
    frequencies[char] = (frequencies[char] || 0) - 1;
    if (frequencies[char] === 0) {
      delete frequencies[char];
    }

    if (end - start + 1 === pattern.length) {
      if (Object.keys(frequencies).length === 0) {
        matchIndices.push(start);
      }
      frequencies[str[start]] = (frequencies[str[start]] || 0) + 1;
      if (frequencies[str[start]] === 0) {
        delete frequencies[str[start]];
      }
      start++;
    }
  }

  return matchIndices;
}

// Given a string and a pattern, find the smallest substring in the given string which has all the characters of the given pattern.
export function smallestSubstring(originalString, pattern) {
  if (!originalString.length || !pattern.length || pattern.length > originalString.length) {
    return '';
  }

  const str = originalString.toLowerCase();
  pattern = pattern.toLowerCase();

  let uniques = 0;
  const frequencies = {};
  for (let char of pattern) {
    if (!(char in frequencies)) {
      uniques++;
      frequencies[char] = 0;
    }
    frequencies[char]++;
  }

  let start = 0;
  let minLength = Infinity;
  let minStr = '';

  for (let end = 0; end < str.length; end++) {
    if (str[end] in frequencies) {
      if(--frequencies[str[end]] === 0) {
        uniques--;
      }
    }

    if (!uniques) {
      while(!uniques) {
        if (str[start] in frequencies) {
          if (++frequencies[str[start]] === 1) {
            uniques++;
          };
        }
        start++;
      }

      if (end - start + 2 < minLength) {
        minLength = end - start + 2;
        minStr = originalString.slice(start - 1, end + 1);
      }
    }
  }

  return minStr;
}

// Given a string and a list of words, find all the starting indices of substrings in the given string that are a concatenation of all the given words exactly once without any overlapping of words. It is given that all words are of the same length.
export function concat(str, arr) {
  if (!str || !arr.length) {
    return [];
  }

  const wordLength = arr[0].length;
  const concatLength = wordLength * arr.length;
  if (str.length < concatLength) {
    return [];
  }

  const indices = [];
  const frequencies = {};
  for (let word of arr) {
    frequencies[word] = (frequencies[word] || 0) + 1;
  }

  for (let start = 0; start < str.length - concatLength + 1; start++) {
    const copy = Object.assign({}, frequencies);
    let next = start;

    while (next < str.length && Object.keys(copy).length) {
      const word = str.slice(next, next + wordLength);
      if (!(word in copy)) {
        break;
      }
      copy[word] -= 1;
      if (copy[word] === 0) {
        delete copy[word];
      }
      next += wordLength;
    }

    if(!Object.keys(copy).length) {
      indices.push(start);
    }
  }

  return indices;
}

