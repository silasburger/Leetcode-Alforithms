/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s === "") {return true;}
    let stack = [];
    for(let char of s) {
        if(char === "{") { 
            stack.push("}");
        } else if(char == "(") {
            stack.push(")")
        } else if(char == "[") {
            stack.push("]");
        } else { 
            if(char !== stack.pop()) return false; 
        } 
        
    }
    if(stack.length !== 0) return false
    return true;
};

// use array as stack
// do linear scan of string
    // if open then add counterpart to stack
    // if closed, pop from stack and make sure it is equal
        //if not return false
//return true of stack is empty otherwise return false

//"" => false
//

// false 


//time: O(n)
//space O(1)