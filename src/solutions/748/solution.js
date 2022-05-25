// NOTE: 문제 링크 = https://leetcode.com/problems/shortest-completing-word/

function solution(licensePlate, words) {
  const licenseMap = licensePlate
    .toLowerCase()
    .match(/([a-z])/g)
    .reduce((map, char) => {
      if (!map.has(char)) {
        map.set(char, 0);
      }
      map.set(char, map.get(char) + 1);
      return map;
    }, new Map());

  for (const word of words) {
    const wordMap = new Map();
    let valid = true;
    for (const char of word) {
      if (!wordMap.has(char)) {
        wordMap.set(char, 0);
      }
      wordMap.set(char, wordMap.get(char) + 1);
    }

    for (const key of licenseMap.keys()) {
      if (licenseMap.get(key) !== wordMap.get(key)) {
        valid = false;
        break;
      }
    }

    if (valid) {
      return word;
    }
  }
}

// 테스트 케이스
// console.log(solution("1s3 PSt", ["step","steps","stripe","stepple"])); // steps
// console.log(solution("1s3 456", ["looks","pest","stew","show"])); // 'pest'
// console.log(solution("Ah71752", ["suggest","letter","of","husband","easy","education","drug","prevent","writer","old"])); // husband
console.log(solution("tR28607", ["present","fall","make","change","everything","performance","owner","beat","name","serve"])); // present
// node ./src/solutions/748/solution.js

