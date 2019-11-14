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

// Given a sorted array, create a new array containing squares of all the number of the input array in the sorted order. Use two pointers.
export function squareNums(arr) {
  const squares = [];

  let small = 0
  let big = arr.length - 1;

  while (small <= big) {
    if (Math.abs(arr[small]) < Math.abs(arr[big])) {
      squares.unshift(arr[big--] ** 2);
    } else {
      squares.unshift(arr[small++] ** 2);
    }
  }

  return squares;
}

export function tripletSum(arr) {
  if (arr.length < 3) {
    return [];
  }
  arr = arr.sort((a, b) => a - b);
  const triplets = [];
  let p1 = 0;
  let p2;
  let p3;

  while (p1 < arr.length - 2) {
    while(arr[p1] === arr[p1 + 1]) {
      p1++;
    }
    p2 = p1 + 1;
    p3 = arr.length - 1;
    while (p2 < p3) {
      while (arr[p2] === arr[p2 + 1] && p2 + 1 !== p3) {
        p2++;
      }
      while (arr[p3] === arr[p3 - 1] && p3 - 1 !== p2) {
        p3--;
      }
      if (p2 >= p3) {
        break;
      }
      const sum = arr[p1] + arr[p2] + arr[p3];
      if (sum === 0) {
        triplets.push([arr[p1], arr[p2], arr[p3]]);
        p2++;
        p3--;
      } else if (sum > 0) {
        p3--;
      } else {
        p2++;
      }
    }
    p1++;
  }
  return triplets;
}

export function tripletSumCloseToTarget(arr, targetSum) {
  if (arr.length < 3) {
    return null;
  }
  arr = arr.sort((a, b) => a - b);
  let absoluteDifference = Infinity;
  let closest = Infinity;
  let p1 = 0;
  let p2;
  let p3;

  while (p1 < arr.length - 2) {
    p2 = p1 + 1;
    p3 = arr.length - 1;

    while (p2 < p3) {
      const sum = arr[p1] + arr[p2] + arr[p3];
      const difference = Math.abs(sum - targetSum);
      if (difference === 0) {
        return sum;
      }
      if (difference < absoluteDifference ) {
        absoluteDifference = difference;
        closest = sum;
      } else if (difference === absoluteDifference) {
        closest = Math.min(closest, sum);
      }

      if (sum < targetSum) {
        p2++;
      } else {
        p3--;
      }
    }
    p1++;
  }

  return closest;
};

// Given an array arr of unsorted numbers and a target sum, count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices. Write a function to return the count of such triplets.
export function tripletWithSmallerSum(arr, targetSum) {
  if (arr.length < 3) {
    return 0;
  }
  
  arr = arr.sort((a, b) => a - b);
  const ans = [];

  let count = 0;
  let p1 = 0;
  let p2;
  let p3;

  while (p1 < arr.length - 2) {
    p2 = p1 + 1;
    while (p2 < arr.length - 1) {
      p3 = p2 + 1;
      while (arr[p1] + arr[p2] + arr[p3] < targetSum && p3 < arr.length) {
        count++;
        ans.push([arr[p1], arr[p2], arr[p3]]);
        p3++;
      }
      p2++;
    }
    p1++;
  }

  return count;
}