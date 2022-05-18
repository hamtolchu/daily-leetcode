// NOTE: 문제 링크 = https://leetcode.com/problems/degree-of-an-array/

function solution(nums) {
  const length = nums.length;
  const map = new Map();
  let maxFreq = 1;
  for (let i = 0; i < length; i += 1) {
    const num = nums[i];
    if (!map.has(num)) {
      map.set(num, {
        freq: 1,
        start: i,
        end: i,
      });
    } else {
      map.get(num).freq += 1;
      map.get(num).end = i;
      if (maxFreq < map.get(num).freq) {
        maxFreq = map.get(num).freq;
      }
    }
  }
  return Math.min(
    ...[...map.keys()]
      .filter((key) => map.get(key).freq === maxFreq)
      .map((key) => {
        const { start, end } = map.get(key);
        return (end - start) + 1;
      })
  );
}

// 테스트 케이스
// console.log(solution([1,2,2,3,1])); // 2
// console.log(solution([1,2,2,3,1,4,2])); // 6
// console.log(solution([1])); // 1
console.log(solution([2, 1])); // 1
