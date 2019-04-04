/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let maxCount = 0;
  let start = 0;
  let map = {};
  for(let i = 0; i < s.length; i++) {
      let curr = s[i];
      if(map[curr] >= start ) start = map[curr] + 1;
      map[curr] = i;
      if(maxCount < i - start + 1) maxCount = i - start + 1;
  }
  return maxCount;
};

lengthOfLongestSubstring("dvdf");

//O(n)
//O(n)