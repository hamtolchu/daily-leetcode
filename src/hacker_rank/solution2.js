// NOTE: 문제 링크 =

function solution(dictionary, query) {
  const sortedDir = dictionary.map((item) => {
    return item.split('').sort().join('');
  });
  const dirSet = new Set([...sortedDir]);
  const dirCountMap = sortedDir.reduce((map, item) => {
    if (!map.has(item)) {
      map.set(item, 0);
    }
    map.set(item, map.get(item) + 1);
    return map;
  }, new Map());
  const sortedQuery = query.map((item) => {
    return item.split('').sort().join('');
  });
  const res = [];
  for (const q of sortedQuery) {
    let count = 0;
    for (const dir of dirSet) {
      if (q === dir) {
        count += dirCountMap.get(dir);
      }
    }
    res.push(count);
  }
  return res;
}

// 테스트 케이스
// console.log(solution(['heater', 'cold', 'clod'], ['codl'])); // 2
console.log(solution( ['heater', 'cold', 'clod', 'reheat', 'docl'], ['codl', 'heater', 'abcd'])); // [3,2,0]
// console.log(solution());
// console.log(solution());
