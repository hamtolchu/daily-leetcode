function solution(s: string): number {
  const uniqueWords = s
    .split("")
    .reduce((acc, item, index) => {
      acc[item] = true;
      return acc;
    }, {} as { [key: string]: boolean });
  const uniqueWordCount = Object.keys(uniqueWords).length;
  if (uniqueWordCount <= 2) {
    return uniqueWordCount;
  }
  let count = uniqueWordCount;
  while (count > 0) {
    const uniqueExist = findUniqueSubstring(s, count);
    if (uniqueExist) {
      break;
    }
    count -= 1;
  }
  return count;
}


function findUniqueSubstring(str: string, length: number) {
  const strLength = str.length;
  let index = 0;
  while (index < (strLength - length + 1)) {
    const word = [];
    for (let i = 0; i < length; i += 1) {
      word.push(str[index + i]);
    }
    if (isAllUnique(word)) {
      return true;
    }
    index += 1;
  }
  return false;
}

function isAllUnique(word: string[]) {
  const wordMap = word.reduce((acc, item) => {
    if (!acc[item]) {
      acc[item] = 0;
    }
    acc[item] += 1;
    return acc;
  }, {} as { [key: string]: number });
  return Object.keys(wordMap).length === word.length;
}

export default solution;