function solution(nums1: number[], nums2: number[]): number[] {
  console.log("solution 496")
  const length = nums2.length;
  const map = nums2.reduce((acc, num, index) => {
    acc[num] = index;
    return acc;
  }, {} as { [key: string]: number });
  const result = [];
  for (const num of nums1) {
    const targetIndex = map[num];
    if (targetIndex === length - 1) {
      result.push(-1);
      continue;
    }
    let targetValue = null;
    for (let i = targetIndex + 1; i < length; i += 1) {
      const current = nums2[i];
      if (num < current) {
        targetValue = current;
        break;
      }
    }
    result.push(targetValue === null ? -1 : targetValue);
  }
  return result;
}

solution([4, 1, 2], [1, 3, 4, 2]);
solution([2, 4], [1, 2, 3, 4]);
export default solution;