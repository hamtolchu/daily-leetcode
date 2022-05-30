// NOTE: 문제 링크 = https://leetcode.com/problems/self-dividing-numbers/

function solution(left, right) {
  const arr = Array.from(
    { length: (right - left) + 1 },
    (e, i) => {
      const num = left + i;
      return {
        num,
        list: String(num).split("").map((s) => parseInt(s))
      }
    }
  );
  const res = [];
  for (const { num, list } of arr) {
    let isSelfDividingNumber = true;
    for (const item of list) {
      if (item === 0) {
        isSelfDividingNumber = false;
        break;
      }
      if (num % item !== 0) {
        isSelfDividingNumber = false;
        break;
      }
    }
    if (isSelfDividingNumber) {
      res.push(num);
    }
  }
  return res;
}

// 테스트 케이스
console.log(solution(1, 22)); // [1,2,3,4,5,6,7,8,9,11,12,15,22]
console.log(solution(47, 85)); // [48,55,66,77]
// console.log(solution());
// node src/solutions/728/solution.js
