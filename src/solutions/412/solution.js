// NOTE: 문제 링크 = https://leetcode.com/problems/fizz-buzz/

function isDivideBy (a) {
  return function (b) {
    return b % a === 0;
  };
}

function solution(n) {
  const isDivideBy3 = isDivideBy(3);
  const isDivideBy5 = isDivideBy(5);
  return Array.from(
    { length: n },
    (el, index) => String(index + 1)
  ).map((item, index) => {
    const actualIndex = index + 1;
    const divideBy3 = isDivideBy3(actualIndex);
    const divideBy5 = isDivideBy5(actualIndex);
    let content = String(actualIndex);
    if (divideBy3 && divideBy5) {
      content = "FizzBuzz";
    } else if (divideBy3) {
      content = "Fizz";
    } else if (divideBy5) {
      content = "Buzz";
    }
    return content;
  });
}

// 테스트 케이스
console.log(solution(3)); //["1","2","Fizz"]
console.log(solution(5)); // ["1","2","Fizz","4","Buzz"]
console.log(solution(15)); // ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
