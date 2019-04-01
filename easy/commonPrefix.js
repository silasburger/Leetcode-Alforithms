/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function(strs) { 
  if(strs.length === 0) return "";
  let commonPrefixIdx = strs[0].length;
  for(let i = 1; i < strs.length; i++) {
      for(let j = 0; j < commonPrefixIdx; j++) {
          if(strs[i][j] !== strs[0][j]) {
              if(j === 0) return "";
              commonPrefixIdx = j;
          }
      }
  }
  return strs[0].slice(0, commonPrefixIdx);
};


// time = O(s) sum of letters in each word
// space = O(1) a constant amount of space was occupied