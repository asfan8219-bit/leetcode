/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0) return  false
    let n = x,rev = 0;
    while(x!=0){
        let dig = x%10;
        rev = rev*10+dig
        x=Math.floor(x/10)
    }
  return  rev=== n
};