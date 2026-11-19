/**
 * @param {number[]} nums
 * @return {number[]}
 */
function productExceptSelf(nums){
    let answer = []
    let prefix = 1
    let suffix = 1

    for(let i=0; i<nums.length; i++){
        answer[i]=prefix
        prefix = prefix*nums[i]
    }
     for (let i = nums.length - 1; i >= 0; i--) {
        answer[i] = answer[i] * suffix;
        suffix = suffix * nums[i];
    }
    return answer
}
let nums = [1,2,3,4]
console.log(productExceptSelf(nums))