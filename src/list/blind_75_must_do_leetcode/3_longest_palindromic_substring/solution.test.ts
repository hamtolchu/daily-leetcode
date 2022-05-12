import solution from 'list/blind_75_must_do_leetcode/3_longest_palindromic_substring/solution';

// NOTE: 다시 작성할것.
describe.skip("Longest Palindromic Substring", () => {
  test("Example 1:", () => {
    expect(solution("babad")).toMatch(/(bab)|(aba)/i);
  });
  test("Example 2:", () => {
    expect(solution("cbbd")).toEqual("bb");
  });

  test("Edge Case 1: Single word", () => {
    expect(solution("a")).toEqual("a");
  });
  test("Edge Case 2: Two word 1", () => {
    expect(solution("ac")).toEqual("a");
  });
  test("Edge Case 3: All Same word", () => {
    expect(solution("ccc")).toEqual("ccc");
  });

  // TODO: 제출환경에서 힙 메모리 터지는 현상
  test("Edge Case 4: long word", () => {
    // expect(solution("civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"));
    // ranynar
  });
});