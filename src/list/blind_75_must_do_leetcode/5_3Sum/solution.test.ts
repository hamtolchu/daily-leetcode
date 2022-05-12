import solution from "list/blind_75_must_do_leetcode/5_3Sum/solution";

describe("3Sum", () => {
  test("Example 1", () => {
    expect(solution([-1,0,1,2,-1,-4])).toEqual([[-1,-1,2],[-1,0,1]]);
  });
  test("Example 2", () => {
    expect(solution([])).toEqual([]);
  });
  test("Example 3", () => {
    expect(solution([0])).toEqual([]);
  });
});