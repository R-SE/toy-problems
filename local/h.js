export function anagram(arr1, arr2) {
  function compare(str1, str2) {
    if (str1.length !== str2.length) {
      return 0;
    }
    const keys = {};
    for (let i = 0; i < str1.length; i++) {
      keys[str1[i]] = (keys[str1[i]] || 0) + 1;
      keys[str2[i]] = (keys[str2[i]] || 0) - 1;
    }
    return Number(Object.values(keys).every(val => val === 0));
  }

  for (let i = 0; i < arr1.length; i++) {
    console.log(compare(arr1[i], arr2[i]));
  }
}

export function braces(arr) {
  const opening = {
    "(": ")",
    "{": "}",
    "[": "]"
  };

  const closing = {
    ")": "(",
    "}": "{",
    "]": "["
  };

  function isValid(str) {
    const arr = [];
    for (let char of str) {
      if (char in opening) {
        arr.push(char);
      } else {
        if (opening[arr.pop()] !== char) {
          return 0;
        }
      }
    }
    return Number(!arr.length);
  }

  arr.forEach(str => console.log(isValid(str)));
}

export function hill(arr) {
  if (arr.length <= 1) {
    console.log(0);
    return;
  }

  function sortAscend(arr) {
    let min = 0;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] <= arr[i - 1]) {
        if (arr[i] >= i + 1) {
          min = i - 1;
        } else {
          min = i;
        }
      }
    }
    return min;
  }

  console.log(sortAscend(arr));
}

export function deviation(arr, k) {
  const maxDequeue = [];
  const minDequeue = [];
  let maxRange = 0;

  for (let end = 0, start = 1 - k; end < arr.length; end++, start++) {
    while (maxDequeue.length && arr[maxDequeue[maxDequeue.length - 1]] < arr[end]) {
      maxDequeue.pop();
    }
    maxDequeue.push(end);
    while (minDequeue.length && arr[minDequeue[minDequeue.length - 1]] > arr[end]) {
      minDequeue.pop();
    }
    minDequeue.push(end);
    maxRange = Math.max(maxRange, arr[maxDequeue[0]] - arr[minDequeue[0]]);
    if (start === maxDequeue[0]) {
      maxDequeue.shift();
    }
    if (start === minDequeue[0]) {
      minDequeue.shift();
    }
  }

  console.log(maxRange);
}

export function maximumDifference(arr) {
  const leftMax = [];
  const leftMin = [];
  const rightMax = [];
  const rightMin = [];

  for (let i = 0; i < arr.length - 1; i++) {
    leftMax[i] = Math.max(arr[i], arr[i] + (leftMax[i - 1] || 0));
    if (!leftMin[i - 1] || leftMin[i - 1] > 0) {
      leftMin[i] = arr[i];
    } else {
      leftMin[i] = arr[i] + leftMin[i - 1];
    }
  }

  for (let i = arr.length - 1; i > 0; i--) {
    rightMax[i] = Math.max(arr[i], arr[i] + (rightMax[i + 1] || 0));
    if (!rightMin[i - 1] || rightMin[i - 1] > 0) {
      rightMin[i] = arr[i];
    } else {
      rightMin[i] = arr[i] + rightMin[i - 1];
    }
  }

  let maxDiff = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    const absolute1 = Math.abs(leftMax[i] - rightMin[i + 1]);
    const absolute2 = Math.abs(rightMax[i + 1] - leftMin[i]);
    maxDiff = Math.max(maxDiff, absolute1, absolute2);
  }

  console.log(maxDiff);
}