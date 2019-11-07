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