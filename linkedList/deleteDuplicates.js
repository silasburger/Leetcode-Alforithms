/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let current = head;
    if(head === null) return head;
    while(current.next !== null) {
        if(current.val === current.next.val) {
            current.next = current.next.next;
            continue;
        }
        current = current.next;
    }
    return head;
};