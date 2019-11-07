// Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.
// Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.
export function twoSum(arr, target) {
  let pointer1 = 0;
  let pointer2 = arr.length;
  while (pointer1 < pointer2) {
    const sum = arr[pointer1] + arr[pointer2];
    if (sum === target) {
      return [pointer1, pointer2];
    } else if (sum < target) {
      pointer1++;
    } else {
      pointer2--;
    }
  }
  return [];
}

// Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after removing the duplicates in-place return the new length of the array.
export function removeDuplicates(arr) {
  let write = 0;
  let read = 0;
  let char = null;
  while (read < arr.length) {
    if (arr[read] !== char) {
      arr[write++] = arr[read];
      char = arr[read];
    }
    read++;
  }

  return write;
}

// Given an unsorted array of numbers and a target ‘key’, remove all instances of ‘key’ in-place and return the new length of the array.
export function removeKeys(arr, key) {
  let write = 0;
  let read = 0;

  while (read < arr.length) {
    if (arr[read] !== key) {
      arr[write++] = arr[read];
    }
    read++;
  }

  return write;
}