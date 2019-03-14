//write a function that sorts a list of negative and positive numbers. Negative numbers come before positive numbers if they're the same.
// [1,5,3,-3,2,2,-20] => [1,2,2,-3,3,5,-20]

let x = function(arr) {
    return arr.sort((a, b) => {

    if(Math.abs(a) === Math.abs(b)) {
      return a < b ? -1 : 1;
    }
    return Math.abs(a) - Math.abs(b);
  });
};


module.exports = {
  x,
}