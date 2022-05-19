// NOTE: 문제 링크 = 

function solution(arr) {
  // 6x6 only
  const sumList = [];
  for (let i = 0; i < 4; i += 1) {
    for (let j = 0; j < 4; j += 1) {
      let partialSum = 0;
      partialSum += arr[i][j]
        + arr[i][j + 1]
        + arr[i][j + 2]
        + arr[i + 1][j + 1]
        + arr[i + 2][j]
        + arr[i + 2][j + 1]
        + arr[i + 2][j + 2];
      sumList.push(partialSum);
    }
  }
  return Math.max(...sumList);
}

// 테스트 케이스
console.log(
  solution(
    [
      [1, 1, 1, 0, 0, 0],
      [0, 1, 0, 0, 0, 0],
      [1, 1, 1, 0, 0, 0],
      [0, 0, 2, 4, 4, 0],
      [0, 0, 0, 2, 0, 0],
      [0, 0, 1, 2, 4, 0]
    ]
  )
); //19
// console.log(solution());
// console.log(solution());
