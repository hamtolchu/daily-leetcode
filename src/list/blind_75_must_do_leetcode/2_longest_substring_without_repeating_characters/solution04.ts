function solution(s: string): number {
  const chars = Array(128).fill(0);
  let left = 0;
  let right = 0;
  let result = 0;
  while (right < s.length) {
    const r = s.charCodeAt(right);
    chars[r] += 1;

    while (chars[r] > 1) {
      const l = s.charCodeAt(left);
      chars[l] -= 1;
      left += 1;
    }
    result = Math.max(result, right - left + 1);
    right += 1;
  }
  return result;
}