function solution(height: number[]): number {
  let width = height.length - 1;
  const pointer = {
    left: 0,
    right: height.length - 1,
  };
  let maxArea = width * Math.min(height[pointer.left], height[pointer.right]);
  while (pointer.left < pointer.right) {
    const left = height[pointer.left];
    const right = height[pointer.right];
    // 우측이 더 클 경우 좌측을 조정
    if (left < right) {
      const leftNext = height[pointer.left + 1];
      const areaNext = (width - 1) * (Math.min(leftNext, right));
      if (areaNext > maxArea) {
        maxArea = areaNext;
      }
      pointer.left += 1;
      width -= 1;
    } else {
      const rightBefore = height[pointer.right - 1];
      const areaNext = (width - 1) * (Math.min(left, rightBefore));
      if (areaNext > maxArea) {
        maxArea = areaNext;
      }
      width -= 1;
      pointer.right -= 1;
    }
  }
  return maxArea;
}

export default solution;