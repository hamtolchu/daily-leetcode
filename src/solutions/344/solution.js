// NOTE: 문제 링크 = https://leetcode.com/problems/reverse-string/

function solution(s) {
  const length = s.length;
  const middle = Math.floor(length / 2);

  for (let i = 0; i < middle; i += 1) {
    let rI = (length - i - 1);
    const temp = s[rI];
    s[rI] = s[i];
    s[i] = temp;
  }

  /*
  let left = 0;
  let right = s.length - 1;

  if (left == right) {
    return;
  }

  while (
    left !== right
    && left + 1 !== right
  ) {
    const leftVal = s[left];
    const rightVal = s[right];
    s[left] = rightVal;
    s[right] = leftVal;

    left += 1;
    right -= 1;
  }

   */
  console.log(s);
}

// 테스트 케이스
console.log(solution(["h","e","l","l","o"])); // ["o","l","l","e","h"]
console.log(solution(["H","a","n","n","a","h"])); //  ["h","a","n","n","a","H"]
console.log(solution(["a", "b", "c"]));
/*
console.log(solution(
  ["A"," ","m","a","n",","," ","a"," ","p","l","a","n",","," ","a"," ","c","a","n","a","l",":"," ","P","a","n","a","m","a"]
));

 */
// ["a","m","a","n","a","P"," ",":","l","a","n","a","c"," ","a"," ",",","n","a","l","p"," ","a"," ",",","n","a","m"," ","A"]

//['a', 'm', 'a', 'n', 'a', 'P', ' ', ':', 'l', 'a', 'n', 'a', 'c', ' ', ' ', 'a', ',', 'n', 'a', 'l', 'p', ' ', 'a', ' ', ',', 'n', 'a', 'm', ' ', 'A']
