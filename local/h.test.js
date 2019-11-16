import {anagram, braces, hill, deviation, maximumDifference} from "./h.js";




describe('anagram', () => {
  const nativeLog = console.log;
  let consoleOutput = [];
  const mockedLog = output => consoleOutput.push(output);

  beforeEach(() => (console.log = mockedLog));
  afterEach(() => {
    console.log = nativeLog;
    consoleOutput = [];
  });

  test('normal case matching + non-matching', () => {
    anagram(['cinema', 'host', 'aba', 'train'], ['iceman', 'shot', 'bab', 'rain']);
    expect(consoleOutput).toEqual([1, 1, 0, 0]);
  });

  test('empty array', () => {
    anagram([], []);
    expect(consoleOutput).toEqual([]);
  });
  

  test('empty string', () => {
    anagram(['', 'sdf', ''], ['', '', 'df']);
    expect(consoleOutput).toEqual([1, 0, 0]);
  });
});


describe('braces', () => {
  const nativeLog = console.log;
  let consoleOutput = [];
  const mockedLog = output => consoleOutput.push(output);

  beforeEach(() => (console.log = mockedLog));
  afterEach(() => {
    console.log = nativeLog;
    consoleOutput = [];
  });

  test('mixed matching + non-matching', () => {
    braces([")(){}", "[]({})", "([])", "{()[]}", "([)]"]);
    expect(consoleOutput).toEqual([0, 1, 1, 1, 0]);
  });

  test('empty array', () => {
    braces([]);
    expect(consoleOutput).toEqual([]);
  });
  
  test('empty strings', () => {
    braces(['', "", '']);
    expect(consoleOutput).toEqual([1, 1, 1]);
  });
});

describe('hill', () => {
  const nativeLog = console.log;
  let consoleOutput;
  const mockedLog = output => consoleOutput = output;

  beforeEach(() => (console.log = mockedLog));
  afterEach(() => {
    console.log = nativeLog;
    consoleOutput = null;
  });

  test('normal case', () => {
    hill([5, 4, 3, 2, 8]);
    expect(consoleOutput).toBe(3);
  });

  test('empty arr', () => {
    hill([]);
    expect(consoleOutput).toBe(0);
  });
  
  test('already sorted ascending', () => {
    hill([2, 3, 4, 5]);
    expect(consoleOutput).toBe(0);
  });
  
  test('descending order no space', () => {
    hill([9, 8, 7, 6, 5, 4]);
    expect(consoleOutput).toBe(5);
  });

  test('descending order space', () => {
    hill([19, 18, 17, 16, 15, 14]);
    expect(consoleOutput).toBe(4);
  });

  test('duplicates', () => {
    hill([5, 5, 6]);
    expect(consoleOutput).toBe(0);
  });

  test('multi duplicates, no space', () => {
    hill([5, 5, 6, 6, 3]);
    expect(consoleOutput).toBe(4);
  });

  test('multi duplicates, space', () => {
    hill([5, 5, 6, 6, 13]);
    expect(consoleOutput).toBe(2);
  });
});

describe('deviation', () => {
  const nativeLog = console.log;
  let consoleOutput;
  const mockedLog = output => consoleOutput = output;

  beforeEach(() => (console.log = mockedLog));
  afterEach(() => {
    console.log = nativeLog;
    consoleOutput = null;
  });
  test('normal case', () => {
    deviation([6, 9, 4, 7, 4, 1], 3);
    expect(consoleOutput).toBe(6);
  });
  
  test('duplicates', () => {
    deviation([10, 5, 5, 7, 12, 11, 7, 5, 5], 3);
    expect(consoleOutput).toBe(7);
  });

  test('all same nums', () => {
    deviation([5, 5, 5, 5], 2);
    expect(consoleOutput).toBe(0);
  });

  test('no elements', () => {
    deviation([], 5);
    expect(consoleOutput).toBe(0);
  });
});



describe('maximumDifference', () => {
  const nativeLog = console.log;
  let consoleOutput;
  const mockedLog = output => consoleOutput = output;

  beforeEach(() => (console.log = mockedLog));
  afterEach(() => {
    console.log = nativeLog;
    consoleOutput = null;
  });

  test('normal case', () => {
    maximumDifference([3, -5, 1, -2, 8, -2, 3, -2, 1]);
    expect(consoleOutput).toBe(15);
  });

  test('all same nums', () => {
    maximumDifference([5, 5, 5, 5]);
    expect(consoleOutput).toBe(10);
  });
});