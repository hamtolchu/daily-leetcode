// NOTE: 문제 링크 = https://leetcode.com/problems/valid-palindrome-ii/
function checkPalindrome(s, i , j) {
  while (i < j) {
    if (s.charAt(i) !== s.charAt(j)) {
      return false;
    }
    i += 1;
    j -= 1;
  }
  return true;
}

function solution(s) {
  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    if (s.charAt(i) !== s.charAt(j)) {
      return (checkPalindrome(s, i, j - 1))
        || (checkPalindrome(s, i + 1, j))
    }
    i += 1;
    j -= 1;
  }
  return true;
}



// 테스트 케이스
console.log(solution("aba")); // true
console.log(solution("abca")); // true
console.log(solution("abc")); // false
