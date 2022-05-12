// https://leetcode.com/problems/plus-one/

function solution(digits: number[]) {
  digits.reverse();
  const length = digits.length;
  let i = 0;
  while (i < length) {
    const current = digits[i];
    if (current + 1 !== 10) {
      digits[i] = current + 1;
      break;
    }
    digits[i] = 0;
    i += 1;
  }
  if (digits[length - 1] === 0) {
    digits.push(1);
  }
  return digits.reverse();
}


// console.log(solution([1, 2, 3])); // 124
solution([9]);

export default solution;