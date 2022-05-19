// NOTE: 문제 링크 = https://www.hackerrank.com/challenges/one-week-preparation-kit-plus-minus/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-one

function solution(arr) {
  const length = arr.length;
  const arrMap = arr.reduce((map, num) => {
    let key = "ZERO";
    if (num === 0) {
      key = "ZERO";
    } else if (num > 0) {
      key = "POS";
    } else {
      key = "NEG";
    }
    if (!map.has(key)) {
      map.set(key, 0);
    }
    map.set(key, map.get(key) + 1);
    return map;
  }, new Map());
  console.log(arrMap);
  ["POS", "NEG", "ZERO"].forEach((key) => {
    if (arrMap.get(key) === 0) {
      console.log(0.000000);
    } else {
      console.log(
        (arrMap.get(key) / length).toFixed(6)
      );
    }
  });
}

// console.log(solution([-4,3,-9,0,4,1])); // 0.5, 0.3, 0.16

console.log(
  solution(
    [0, -67, -74, -38, -72, -53, 0, -13, -95, -91, -100, -59, 0, -10, -68, -71, -62, -21, 0, -42, -57, -16, -66, -23, 0, -80, -63, -68, -65, -71, 0, -71, -15, -32, -26, -8, 0, -6, -51, -87, -19, -71, 0, -93, -26, -35, -56, -89, 0, -21, -74, -39, -57, -8, 0, -69, -29, -24, -99, -53, 0, -65, -42, -72, -18, -4, 0, -73, -46, -63, -78, -87]
  )
); //
// 0.000000
// 0.833333
// 0.166667