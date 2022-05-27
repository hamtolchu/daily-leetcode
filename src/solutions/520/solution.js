// NOTE: 문제 링크 = https://leetcode.com/problems/detect-capital/

function solution(word) {
  const new_word = word.split("").map((char) => {
    const charCode = char.charCodeAt(0);
    return {
      char,
      charCode,
      isCapital:  (charCode >= 65) && (charCode <= 90)
    };
  });

  const {
    allCapital,
    allNonCapital,
    onlyFirstCapital,
  } = new_word.reduce((obj, item, index) => {
    const { isCapital } = item;
    if (isCapital && index !== 0) {
      obj.onlyFirstCapital = false;
    }
    if (!isCapital) {
      obj.allCapital = false;
    }
    if (isCapital) {
      obj.allNonCapital = false;
    }
    return obj;
  }, {
    allCapital: true,
    allNonCapital: true,
    onlyFirstCapital: true,
  });

  console.log({
    allCapital,
    allNonCapital,
    onlyFirstCapital,
  })
  return allCapital || allNonCapital || onlyFirstCapital;
}

// 테스트 케이스
// console.log(solution("USA")); // true
console.log(solution("FlaG")); // false
// console.log(solution());

// node ./src/solutions/520/solution.js