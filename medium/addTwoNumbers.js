/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let list = new ListNode(0);
  let curr = list;
  let sum = 0;
  let carried = 0;
  while(l1 !== null || l2 !== null || sum > 0) {
      if(l1 !== null) {
          sum += l1.val;
      }
      if(l2 !== null) {
          sum += l2.val;
      }
      if(sum >= 10) {
          carried = 1;
          sum = sum - 10;
      }

      
      curr.next = new ListNode(sum);
      curr = curr.next;
      if(l1) l1 = l1.next;
      if(l2) l2 = l2.next;
      
      sum = carried;
      carried = 0;
      
  }
  return list.next;
};