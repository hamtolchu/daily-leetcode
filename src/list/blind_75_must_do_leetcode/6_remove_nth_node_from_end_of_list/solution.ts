/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function solution(head: number[], n: number) {
  const stack = [];
  const targetIndex = head.length - n;
  for (let i = 0; i < head.length; i += 1) {
    if (i !== targetIndex) {
      stack.push(head[i]);
    }
  }
  return stack;
}

solution([1, 2, 3, 4, 5], 2);
solution([1], 1);
solution([1, 2], 1);