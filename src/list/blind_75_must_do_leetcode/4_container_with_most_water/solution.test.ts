import solution  from 'list/blind_75_must_do_leetcode/4_container_with_most_water/solution';

describe("Container With Most Water", () => {
  test("Example 1", () => {
    expect(solution([1, 8, 6, 2, 5, 4, 8, 3, 7])).toEqual(49);
  });

  test("Example 2", () => {
    expect(solution([1, 1])).toEqual(1);
  });

  test("Edge Case 1", () => {
    expect(solution([1, 2, 1])).toEqual(2);
  });

  test("Edge Case 2", () => {
    expect(solution([1, 2, 4, 3])).toEqual(4);
  });

  test("Edge Case 3", () => {
    expect(solution([2,3,10,5,7,8,9])).toEqual(36);
  });

  test("Edge Case 4", () => {
    expect(solution([2, 3, 4, 5, 18, 17, 6])).toEqual(17);
  })
});