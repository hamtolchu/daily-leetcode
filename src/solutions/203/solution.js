// NOTE: 문제 링크 = https://leetcode.com/problems/remove-linked-list-elements/

function solution(head, val) {
  let node = head;
  let newHead = null;
  let prev = null;
  while (node !== null) {
    if (node.val !== val) {
      if (!prev) {
        newHead = new ListNode(node.val);
        prev = newHead;
      } else {
        prev.next = new ListNode(node.val);
        prev = prev.next;
      }
    }
    node = node.next;
  }
  return newHead;
}

// 테스트 케이스
console.log(solution());
console.log(solution());
console.log(solution());
