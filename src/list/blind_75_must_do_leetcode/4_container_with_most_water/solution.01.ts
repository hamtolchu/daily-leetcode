// 높이만 기준으로 찾음
function solution(height: number[]): number {
  let width = height.length - 1;
  let min = 0;
  const pointer = {
    left: 0,
    right: height.length - 1,
  };
  while (pointer.left < pointer.right) {
    const left = height[pointer.left];
    const leftNext = height[pointer.left + 1];
    if (
      left < leftNext
      && pointer.left + 1 !== pointer.right
    ) {
      pointer.left += 1;
      width -= 1;
      continue;
    }
    const right = height[pointer.right];
    const rightBefore = height[pointer.right - 1];
    if (
      right < rightBefore
      && pointer.right - 1 !== pointer.left
    ) {
      pointer.right -= 1;
      width -= 1;
      continue;
    }
    min = Math.min(height[pointer.left], height[pointer.right]);
    break;
  }
  return width * min;
}
