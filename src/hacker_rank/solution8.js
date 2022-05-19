// NOTE: 문제 링크 = https://www.hackerrank.com/challenges/one-week-preparation-kit-time-conversion/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-one&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

function solution(s) {
  let [hStr, mStr, sText] = s.split(":");
  const sStr = sText.slice(0, 2);
  const clock = sText.slice(2, 4);
  if (clock === 'AM' && hStr === '12') {
    hStr = "00";
  }
  if (clock === 'PM' && hStr !== '12') {
    hStr = String(parseInt(hStr) + 12);
  }
  console.log(`${hStr}:${mStr}:${sStr}`);
}

// 테스트 케이스
console.log(solution("07:05:45PM")); // 19:05:45
console.log(solution("12:01:00PM")); // 12:01:00
console.log(solution("12:01:00AM")); // 00:01:00
