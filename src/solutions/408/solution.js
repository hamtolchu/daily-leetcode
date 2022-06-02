// NOTE: 문제 링크 = https://leetcode.com/problems/valid-word-abbreviation/

function solution(word, abbr) {
  const parsedAbbr = [];
  let temp = null;
  for (let i = 0; i < abbr.length; i += 1) {
    const char = abbr[i];
    const num = parseInt(char, 10);
    const validNext = abbr[i + 1] !== undefined && !isNaN(parseInt(abbr[i + 1], 10));
    if (isNaN(num)) {
      parsedAbbr.push(char);
      temp = null;
    } else {
      if (temp === null) {
        if (char === "0") {
          parsedAbbr.push(char);
        } else {
          temp = char;
        }
      } else {
        temp = `${temp}${char}`;
      }
      if (!validNext && temp) {
        parsedAbbr.push(parseInt(temp, 10));
        temp = null;
      }
    }
  }

  const abbrWordLength = parsedAbbr.reduce((sum, item) => {
    if (item === '0' || isNaN(item)) {
      sum += 1;
    } else {
      sum += item;
    }
    return sum;
  }, 0);

  if (word.length !== abbrWordLength) {
    return false;
  }

  let index = 0;
  for (const item of parsedAbbr) {
    const isChar = item === '0' || isNaN(item);
    if (isChar) {
      if (item !== word[index]) {
        return false;
      }
      index += 1;
    } else {
      for (let j = 0; j < item; j += 1) {
        index += 1;
      }
    }
  }
  return true;
}

// 테스트 케이스
console.log(solution("internationalization", "i12iz4n")); //true
console.log(solution("apple", "a2e")); // false
console.log(solution("a", "01")); // false
console.log(solution("bignumberhahaha", "999999999")); // false
// node ./src/solutions/408/solution.js