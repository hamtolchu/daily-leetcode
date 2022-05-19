// NOTE: 문제 링크 = 

function solution(a) {
  const map = a.reduce((m, num) => {
   if (!m.has(num)) {
     m.set(num, 0);
   }
   m.set(num, m.get(num) + 1);
   return m;
  }, new Map());

  for (const key of map.keys()) {
    if (map.get(key) === 1) {
      return key;
    }
  }
}

// 테스트 케이스
console.log(solution([1,2,3,4,3,2,1])); // 4
// console.log(solution());
// console.log(solution());
// node ./src/hacker_rank/prepare/interview_preparation_kits/1_week_preparation_kit/day2/solution1.js