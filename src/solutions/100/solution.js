// NOTE: 문제 링크 = https://leetcode.com/problems/same-tree/

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

const p = new TreeNode(
  1,
  new TreeNode(2),
);
const q = new TreeNode(
  1,
  null,
  new TreeNode(2)
);

function solution(p, q) {
  const pTreeValues = getAll([], p);
  const qTreeValues = getAll([], q);

  if (pTreeValues.length !== qTreeValues.length) {
    return false;
  }

  for (let i = 0; i < pTreeValues.length; i += 1) {
    const pV = pTreeValues[i];
    const qV = qTreeValues[i];
    if (pV !== qV) {
      return false;
    }
  }
  return true;
}

function getAll(arr, t) {
  if (t === null) {
    arr.push(null);
    return;
  }
  const { left, right, val } = t;
  arr.push(val);
  getAll(arr, left);
  getAll(arr, right);
  return arr;
}

// 테스트 케이스
console.log(solution(p, q));
// console.log(solution());
// console.log(solution());
// node ./src/solutions/100/solution.js
