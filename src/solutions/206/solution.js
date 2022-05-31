// NOTE: 문제 링크 = https://leetcode.com/problems/reverse-linked-list/

function ListNode(val, next) {
  this.val = (val === undefined) ? 0 : val;
  this.next = (next === undefined) ? null : next;
  this._toString = function() {
    let node = this;
    const res = [];
    while (node !== null) {
      res.push(node.val);
      node = node.next;
    }
    return res;
  }
}

const qHead = new ListNode(
  1,
  new ListNode(
    2,
    new ListNode(
      3,
      new ListNode(
        4,
        new ListNode(5)
      )
    )
  )
);

function solution(head) {
  let node = head;
  let prev = null;
  let newHead = null;
  while (node !== null) {
    const next = node.next;
    if (!prev) {
      newHead = new ListNode(node.val);
    } else {
      newHead = new ListNode(node.val, newHead);
    }
    prev = node;
    node = next;
  }
  return newHead;
}

// 테스트 케이스
console.log(solution(qHead));
// console.log(solution());
// console.log(solution());
