// NOTE: 문제 링크 = 

function solution(n, queries) {
  queries = queries.filter(([k]) => {
    return k !== 0;
  });
  const arr = Array.from({ length: n + 1 }, () => 0);
  let max = 0;
  let sum = 0;
  queries.forEach(([a, b, k]) => {
    arr[a - 1] += k;
    arr[b] -= k;
  });

  arr.forEach((val) => {
    sum += val;
    max = Math.max(sum, max);
  });

  return max;

  /* Length(queries) * 10^7
  queries = queries.filter(([k]) => {
    return k !== 0;
  });

  const res = Array.from({ length: n }, () => 0);
  for (const [a, b, k] of queries) {
    for (let i = a - 1; i < b; i += 1) {
      res[i] += k;
    }
  }
  return Math.max(...res);
  */

  /*
  // n * Length(queries)
  let max = 0;
  for (let i = 0; i < n; i += 1) {
    let sum = 0;
    for (const query of queries) {
      const [a, b, k] = query;
      if (
        a - 1 <= i
        && b > i
      ) {
        sum += k;
      }
    }
    if (sum > max) {
      max = sum;
    }
  }
  return max;
  */
}

/*
// 테스트 케이스
console.log(
  solution(10,
    [
      [1,5,3],
      [4,8,7],
      [6,9,1]
    ]
  )
); // [5,1,2,3,4,]
*/
console.log(
  solution(
    10,
    [
      [2, 6, 8],
      [3, 5, 7],
      [1, 8, 1],
      [5, 9, 15]
    ]
  )
); // 31
// console.log(solution());
// console.log(solution());
