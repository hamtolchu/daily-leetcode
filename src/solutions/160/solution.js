// NOTE: 문제 링크 = https://leetcode.com/problems/intersection-of-two-linked-lists/

function ListNode(val) {
  this.val = val;
  this.next = null;
}

// [4,1,8,4,5]
const testA = new ListNode(4);
const testB = new ListNode(5);

let nodeA = testA;
let nodeB = testB;

nodeA.next = new ListNode(1);
nodeA = nodeA.next;

const shareNodeList = [new ListNode(8), new ListNode(4), new ListNode(5)];

shareNodeList.forEach((node) => {

})


function solution(headA, headB) {
  const stackA = [];
  const stackB = [];
  let nodeA = headA;
  while (nodeA !== null) {
    stackA.push(nodeA);
    nodeA = nodeA.next;
  }

  let nodeB = headB;
  while (nodeB !== null) {
    stackB.push(nodeB);
    nodeB = nodeB.next;
  }

  let iNode = null;
  while (stackA.length !== 0 || stackB.length !== 0) {
    const aLast = stackA.pop();
    const bLast = stackB.pop();
    if (aLast === bLast) {
      iNode = aLast;
    } else {
      break;
    }
  }

  return iNode;
}

// 테스트 케이스
console.log(solution([4,1,8,4,5], [5,6,1,8,4,5]));
// console.log(solution());
// console.log(solution());
// node ./src/solutions/160/solution.js