// NOTE: 문제 링크 = 

function solution(arr) {
  const length = arr.length;
  const middle = Math.floor(length / 2);

  for (let i = 0; i < middle; i += 1) {
    let temp = arr[i];
    arr[i] = arr[length - i - 1];
    arr[length - i - 1] = temp;
  }

  return arr;
}

// 테스트 케이스
console.log(solution([1,2,3])); // 3,2,1
console.log(solution([1,2,3,4])); // 4,3,2,1
console.log(solution([1,2,3,4,5,6,7])); // 7,6,5,4,3,2,1
