/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  let s = [];
  let results = [];
  do {
      if(root) {
          s.push(root);
          root = root.left;
      } else {
          if(!s.length) break;
          root = s.pop();
          results.push(root.val);
          root = root.right
      }
  } while(true);
  
  return results;
};