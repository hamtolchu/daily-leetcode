// NOTE: 문제 링크 = https://leetcode.com/problems/longest-palindrome/

function solution(s) {
  const wordMap = s
    .split("")
    .reduce((m, c) => {
      if (!m.has(c)) {
        m.set(c, 0);
      }
      m.set(c, m.get(c) + 1);
      return m;
    }, new Map());

  const uniqueWordCount = Array.from(wordMap.keys()).length;
  if (uniqueWordCount === 1) {
    return s.length;
  }

  const isAllUnique = Array
    .from(wordMap.keys())
    .reduce((b, key) => {
      if (wordMap.get(key) !== 1) {
        b = false;
      }
      return b;
    }, true);
  if (isAllUnique) {
    return 1;
  }

  const oddKeys = Array
    .from(wordMap.keys())
    .filter((key) => {
      return wordMap.get(key) % 2 !== 0;
    });
  if (oddKeys.length <= 1) {
    return s.length;
  }

  for (let i = 0; i < oddKeys.length; i += 1) {
    const key = oddKeys[i];
    wordMap.set(key, wordMap.get(key) - 1);
    if (oddKeys.length - (i + 1) === 1) {
      break;
    } else {
      continue;
    }
  }

  return Array.from(wordMap.keys()).reduce((sum, key) => {
    sum += wordMap.get(key);
    return sum;
  }, 0);
}

// 테스트 케이스
console.log(solution("abccccdd")); // 7
console.log(solution("a")); // 1
console.log(solution("bb")); // 2
console.log(solution("ccc")); // 3
console.log(solution("abb")); // 3
console.log(solution("abcbe")); // 3

//  node ./src/solutions/409/solution.js