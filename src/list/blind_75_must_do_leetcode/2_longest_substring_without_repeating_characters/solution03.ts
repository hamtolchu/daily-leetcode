function solution(s: string): number {
  const map = new Map();
  let left = 0;
  let right = 0;

  let result = 0;

  while (right < s.length) {
    const char = s[right];
    if (!map.has(char)) {
      map.set(char, 0);
    }
    map.set(char, map.get(char) + 1);

    while (map.get(char) > 1) {
      const l = s[left];
      map.set(l, map.get(l) - 1);
      left += 1;
    }
    result = Math.max(result, right - left + 1);
    right += 1;
  }
  return result;
}