// NOTE: 문제 링크 = https://www.hackerrank.com/challenges/one-week-preparation-kit-diagonal-difference/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-two&h_r=next-challenge&h_v=zen

function solution(arr) {
  const rows = arr.length;
  let ltr = 0;
  let rtl = 0;
  for (let i = 0; i < rows; i += 1) {
    ltr += arr[i][i];
    rtl += arr[i][Math.abs(rows - 1 - i)];
  }
  return Math.abs(ltr - rtl);
}

// 테스트 케이스
console.log(solution([
  [1,2,3],
  [4,5,6],
  [9,8,9]
])); // 2
// console.log(solution());
// console.log(solution());
