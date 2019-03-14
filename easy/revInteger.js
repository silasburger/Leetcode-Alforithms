var reverse = function(x) {
  let str = x.toString();
  let temp;
  let arr = str.split('');
  let p1 = arr[0] === "-" ? 1 : 0;
  let p2 = arr.length - 1;
  while(p1 < p2) {
      temp = arr[p1];
      arr[p1] = arr[p2];
      arr[p2] = temp;
      p1++;
      p2--;
  }
  let reversed = +arr.join('');
  if(reversed > Math.pow(2, 31) - 1 || reversed < Math.pow(-2,31)) {
      return 0;
  }
  return +arr.join('');
};

//time: O(n)
//space: O(n)

//I need to practice the time analysis