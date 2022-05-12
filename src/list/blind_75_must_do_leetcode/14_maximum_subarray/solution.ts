function solution(nums: number[]): number {
  const pointer = {
    left: 0,
    right: nums.length - 1,
  };
  let result = null;
  while (pointer.left <= pointer.right) {
    const sum = sumRange(nums, pointer.left, pointer.right);
    console.log(`CURRENT : ${pointer.left} : ${pointer.right} / SUM = ${sum} / ${result}`);
    const leftValue = nums[pointer.left];
    const rightValue = nums[pointer.right];
    if (leftValue >= rightValue) {
      pointer.right -= 1;
    }
    if (leftValue < rightValue) {
      pointer.left += 1;
    }
    if (
      result === null
      || sum > result
    ) {
      result = sum;
    }
  }
  // @ts-ignore
  return result;
}

function sumRange(array: number[], left: number, right: number) {
  return array.reduce((acc, item, index) => {
    if (
      index >= left
      && index <= right
    ) {
      acc += item;
    }
    return acc;
  }, 0);
}

console.log(solution([-2,1,-3,4,-1,2,1,-5,4]));
console.log(solution([-2,1]));