// NOTE: 문제 링크 = https://leetcode.com/problems/majority-element/

function solution(nums) {
  const n = nums.length;
  const majority = Math.floor(n / 2);

  const map = new Map();
  for (const num of nums) {
    if (!map.has(num)) {
      map.set(num, 0);
    }
    map.set(num, map.get(num) + 1);
  }

  const [res] = Array
    .from(map.keys())
    .filter((key) => {
      return map.get(key) >= majority;
    }).sort((a, b) => map.get(b) - map.get(a));
  return res;
}

// 테스트 케이스
console.log(solution([3,2,3])); // 3
console.log(solution([2,2,1,1,1,2,2])); // 2
console.log(solution([2,2])); // 2
console.log(solution([6,5,5])); // 5
// console.log(solution());
// node ./src/solutions/169/solution.js