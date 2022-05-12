/*
Time: O(n^3)
Space: O(m) // m = size of table -> depends on 's' charset
 */
/**
 * @param {string} s
 * @return {number}
 */
function solution(s: string): number {
  let result = 0;
  for (let i = 0; i < s.length; i += 1) {
    for (let j = i; j < s.length; j += 1) {
      if (check(s, i, j)) {
        result = Math.max(result, j - i + 1);
      }
    }
  }
  return result;
}

function check(s: string, start: number, end: number): boolean {
  const chars = new Map();
  for (let i = start; i <= end; i += 1) {
    const current = s[i];
    if (!chars.has(current)) {
      chars.set(current, 1);
    } else {
      chars.set(current, chars.get(current) + 1);
    }
    if (chars.get(current) > 1) {
      return false;
    }
  }
  return true;
}


solution("abcabcbb");

export default solution;