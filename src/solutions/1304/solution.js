// NOTE: 문제 링크 = https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/

function* range(limit, f = (b) => b) {
  let a = 1;
  while (a <= limit) {
    yield f(a);
    a += 1;
  }
}

function solution(n) {
  if (n === 1) {
    return [0];
  }
  const isEven = n % 2 === 0;
  const middle = Math.floor(n / 2);
  const result = [...range(middle), ...range(middle, (a) => a * -1)];
  if (!isEven) {
    result.push(0);
  }
  return result;
}

// 테스트 케이스
console.log(solution(5)); // [-7,-1,1,3,4] or [-5,-1,1,2,3], [-3,-1,2,-2,4]
console.log(solution(2)); // [-1,0,1]
console.log(solution(1)); // [0]
// node ./src/solutions/1304/solution.js