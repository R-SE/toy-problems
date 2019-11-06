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