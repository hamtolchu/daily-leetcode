/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function solution(strs: string[]): string[][] {
  const wordMap: { [key: string]: string[] } = {};
  for (let word of strs) {
    const sortedWord = word
      .split("")
      .sort()
      .join("");
    if (!wordMap[sortedWord]) {
      wordMap[sortedWord] = [];
    }
    wordMap[sortedWord].push(word);
  }

  return Object.keys(wordMap).map((key) => {
    return wordMap[key];
  });
}

// console.log(solution(["eat","tea","tan","ate","nat","bat"]));
console.log(solution([""]))