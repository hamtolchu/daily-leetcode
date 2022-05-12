import solution from 'list/blind_75_must_do_leetcode/1_two_sum/solution';

describe("Two Sum", () => {
  test("Example 1:", () => {
    expect(solution([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });
  test("Example 2:", () => {
    expect(solution([3, 2, 4], 6)).toEqual([1, 2]);
  });
  test("Example 3:", () => {
    expect(solution([3, 3], 6)).toEqual([0, 1]);
  });
});