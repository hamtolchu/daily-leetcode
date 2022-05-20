// NOTE: 문제 링크 = https://leetcode.com/problems/arranging-coins/

function solution(n) {
  // 1, 3 ,6, 10  15
  //   2  3  4  5
  // 계차수열
  const data = [];
  data[0] = 1;
  data[1] = 3;

  if (n === 1) {
    return 1;
  }

  for (let i = 2; i < 10; i += 1) {
    data[i] = i + 1 + data[i - 1];
    // console.log(`${n} : ${data[i]}`);
  }

  console.log(Math.floor(Math.sqrt(2 * n + 0.25) - 0.5));
  /*
  const data = [];
  // 동전이 N 개일때 채울 수 있는 계단의 수
  data[0] = 0;
  data[1] = 1; // 전체 계단 수 1
  data[2] = 1; // 전체 계단 수 3
  data[3] = 2; // 전체 계단 수 3
  data[4] = 2; // 전체 계단 수 6
  data[5] = 2; // 전체 계단 수 6
  data[6] = 3; // 전체 계단 수 6
  data[7] = 3; // 전체 계단 수 10
  data[8] = 3; // 전체 계단 수 10
  data[9] = 3; // 전체 계단 수 10
  data[10] = 4; // 전체 계단 수 10
  data[11] = 4; // 전체 계단 수 15
  data[12] = 4; // 전체 계단 수 15
  data[13] = 4; // 전체 계단 수 15
  data[14] = 4; // 전체 계단 수 15
  data[15] = 5; // 전체 계단 수 15
  // console.log(data);
  [
    0,
    1, 1,
    2, 2, 2,
    3, 3, 3, 3,
    4, 4, 4, 4, 4
  ]
   */
}

// 테스트 케이스 2^31 - 1
console.log(solution(1)); // 1
console.log(solution(5)); // 2
console.log(solution(8)); // 3
console.log(solution(2)); // 1
console.log(solution(1804289383)); // 60070