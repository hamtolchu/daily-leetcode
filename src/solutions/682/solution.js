// NOTE: 문제 링크 = https://leetcode.com/problems/baseball-game/

function solution(ops) {
  const res = [];
  for (const op of ops) {
    if (op === "+") {
      res.push(res[res.length - 1] + res[res.length - 2]);
      continue;
    }
    if (op === "C") {
      res.pop();
      continue;
    }
    if (op === "D") {
      res.push(res[res.length - 1] * 2);
      continue;
    }
    const num = parseInt(op, 10);
    res.push(num);
  }
  return res.reduce((sum, num) => {
    sum += num;
    return sum;
  }, 0);
}

// 테스트 케이스
console.log(solution(["5","2","C","D","+"])); // 30
// console.log(solution(["5","-2","4","C","D","9","+","+"])); // 27
// console.log(solution(["1","C"])); // 0
