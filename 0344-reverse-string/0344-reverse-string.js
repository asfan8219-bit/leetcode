/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 function reverseString(str){
    let left = 0
    let right = str.length-1

    for(let i=left; i<right; i++){
        [str[left],str[right]]=[str[right],str[left]]

        left++
        right--
    }
    return str
}
let str = ["h","e","l","l","o"]
console.log(reverseString(str))
