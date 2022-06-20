// NOTE: 문제 링크 = https://leetcode.com/problems/distribute-candies/

function solution(candyType) {
  const n = candyType.length;
  const eatableCandyCount = n / 2;

  const map = candyType.reduce((m, c) => {
    if (!m.has(c)) {
      m.set(c, 0);
    }
    m.set(c, m.get(c) + 1);
    return m;
  }, new Map());
  const uniqueCandyCount = map.size;

  if (uniqueCandyCount === 1) {
    return 1;
  }

  if (eatableCandyCount > uniqueCandyCount) {
    return uniqueCandyCount;
  }
  return eatableCandyCount;
}

// 테스트 케이스
console.log(solution([1,1,2,2,3,3])); // 3
console.log(solution([1,1,2,3])); // 2
console.log(solution([6,6,6,6])); // 1
