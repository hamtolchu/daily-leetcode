function solution(s: string): number {
  const chars = Array(128).fill(0);
  let left = 0;
  let right = 0;
  let result = 0;
  while (right < s.length) {
    const r = s.charCodeAt(right);
    const index = chars[r];
    if (index !== null && index >= left && index < right) {
      left = index + 1;
    }
    result = Math.max(result, right - left + 1);
    chars[r] = right;
    right += 1;
  }
  return result;
}