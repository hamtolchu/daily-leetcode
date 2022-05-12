import solution from "list/blind_75_must_do_leetcode/3_longest_substring_without_repeating_characters/solution";

describe("Longest Substring Without Repeating Characters", () => {
  test("Example 1", () => {
    expect(solution("abcabcbb")).toEqual(3);
  });
  test("Example 2", () => {
    expect(solution("bbbbb")).toEqual(1);
  });
  test("Example 3", () => {
    expect(solution("pwwkew")).toEqual(3);
  });
});