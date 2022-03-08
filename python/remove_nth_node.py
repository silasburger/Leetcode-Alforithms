# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        fast = slow = head
        for _ in range(n):
            fast = fast.next
        if not fast:
            return slow.next
        while fast.next != None:
            fast = fast.next
            slow = slow.next
        
        slow.next = slow.next.next
        return head


        # give fast a head start of x  
        # then move fast and slow at same rate until fast reach end of ll
        # slow should then be at the node before the target 
        # unlink target node

