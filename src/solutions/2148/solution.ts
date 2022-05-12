function solution(nums: number[]) {
  let count = 0;
  const min = Math.min(...nums);
  const max = Math.max(...nums);
  for (const num of nums) {
    if (num > min && num < max) {
      count += 1;
    }
  }
  return count;
}

// solution([11,7,2,15]);
solution([-3,3,3,90]);
export default solution;