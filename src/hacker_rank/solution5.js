// NOTE: 문제 링크 = 

function solution(d, arr) {
  const length = arr.length;
  const rCount = d % length;
  return [...arr.slice(rCount, length), ...arr.slice(0, rCount)];
}

// 테스트 케이스
console.log(
  solution(4, [1,2,3,4,5])
); // [5,1,2,3,4,]
console.log(
  solution(5, [1,2,3,4,5])
); // [5,1,2,3,4,]
/*
5
1, [2, 3, 4, 5, 1]
2, [3, 4, 5, 1, 2]
3, [4, 5, 1, 2, 3]
4, [5, 1, 2, 3, 4]
5, [1, 2, 3, 4, 5]
*/
// console.log(solution());
// console.log(solution());
