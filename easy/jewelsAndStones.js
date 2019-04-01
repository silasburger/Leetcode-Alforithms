/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  jArr = J.split('');
  jSet = new Set(jArr);
  count = 0;
  
  for(let i = 0; i < S.length; i++) {
      if(jSet.has(S[i])) count++;
  }
  return count;
};

//create set from J and scan through S

//time: O(n) n is whichever is larger of S and J
//space: O(j) memory allocation depends on the size of the j string. 