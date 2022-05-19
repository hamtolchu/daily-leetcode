// NOTE: 문제 링크 = 

function solution(usernames) {
  const res = [];
  for (const userName of usernames) {
    const userNameCodes = userName.split("").map((char) => char.charCodeAt(0));
    let left = 0;
    let right = userNameCodes.length - 1;
    let tmpRes = "NO";
    while (left < userNameCodes.length - 1) {
      const leftChar = userNameCodes[left];
      const rightChar = userNameCodes[right];
      if (leftChar > rightChar) {
        tmpRes = "YES";
        break;
      }
      if (right - 1 === left) {
        left += 1;
        right = userNameCodes.length - 1;
      } else {
        right -= 1;
      }
    }
    res.push(tmpRes);
  }
  return res;
}

// 테스트 케이스
console.log(solution(["hydra"])); // YES
console.log(solution(["aydra"])); // YES
console.log(solution(["foo","bar","baz"])); // NO, YES, YES
// console.log(solution());
