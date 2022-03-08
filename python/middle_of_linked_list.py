# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def middleNode(self, head: Optional[ListNode]) -> Optional[ListNode]:
        fast, slow = head, head 

        while fast != None and fast.next != None:
            fast = fast.next.next
            slow = slow.next

            return slow
      
        
        
        
# get length
# get middle beginning 
# then cycle through again and return that node

#have fast 
#have slow 

#when fast finished return slow


