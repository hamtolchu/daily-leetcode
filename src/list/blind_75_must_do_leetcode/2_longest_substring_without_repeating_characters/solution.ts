// Time: O(n)
// Space: O(m) -> size of table
function solution(s: string): number {
  const map = new Map();
  let left = 0;
  let right = 0;
  let result = 0;
  while (right < s.length) {
    const char = s[right];
    const index = map.get(char);
    if (
      index !== null
      && index >= left
      && index < right
    ) {
      left = index + 1;
    }
    result = Math.max(result, right - left + 1);
    map.set(char, right);
    right += 1;
  }
  return result;
}