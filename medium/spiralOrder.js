/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if(matrix.length === 0) return [];
    let t = 0;
    let l = 0;
    let r = matrix[0].length-1;
    let b = matrix.length-1;
    let count = 0;
    let results = [];
    while(b - t >= 0 && r - l >= 0) {
        if(count % 4 === 0){
            for(let i = l; i <= r; i++) {
                results.push(matrix[t][i]);
            }  
            t++; 
        } else if(count % 4 === 1) {
            for(let i = t; i <= b; i++) {
                results.push(matrix[i][r]);
            }  
            r--; 
        } else if(count % 4 === 2) {
            for(let i = r; i >= l; i--) {
                results.push(matrix[b][i]);
            }
            b--; 
        } else {
            for(let i = b; i >= t; i--) {
                results.push(matrix[i][l]);
            }
            l++; 
        }
        count++;
    }
    return results;
};

