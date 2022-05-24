// NOTE: 문제 링크 = https://leetcode.com/problems/can-place-flowers/

function solution(flowerbed, n) {
  const length = flowerbed.length;
  let count = 0;
  for (let i = 0; i < length; i += 1) {
    const cur = flowerbed[i];
    if (cur === 0) {
      let emptyLeftPlot = (i === 0) || (flowerbed[i - 1] === 0);
      let emptyRightPlot = (i === length - 1) || (flowerbed[i + 1] === 0);
      if (emptyLeftPlot && emptyRightPlot) {
        flowerbed[i] = 1;
        count += 1;
        if (count >= n) {
          return true;
        }
      }
    }
  }
  return count >= n;
}

// 테스트 케이스
// console.log(solution([1], 1)); // false
// console.log(solution([0,0], 1)); // true
// console.log(solution([0,0,0], 1)); // true
// console.log(solution([0,0,0,0], 3)); // false
console.log(solution([1,0,0,0,0,1], 2));
// console.log(solution([1,0,0,0,1], 1)); // true
// console.log(solution([1,0,0,0,1,0], 4)); // true
// console.log(solution([1,0,1,0,1], 1)); // false
// console.log(solution([0,0,0,0,1], 2)); // false
// console.log(solution([1,0,0,0,1], 2)); // false
// console.log(solution());
