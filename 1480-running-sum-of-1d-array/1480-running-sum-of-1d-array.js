/**
 * @param {number[]} nums
 * @return {number[]}
 */
function runningSum(num){
    let sum = 0
    let result = []

    for(let i=0; i<num.length; i++){
        sum = sum + num[i]
        result.push(sum)
    }
    return result
}
let num = [1,2,3,4]
console.log(runningSum(num))