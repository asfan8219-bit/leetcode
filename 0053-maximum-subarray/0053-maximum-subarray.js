/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums){
    let currentsum = 0
    let maxsum = -Infinity

    for(let i=0; i<nums.length; i++){
        currentsum = currentsum + nums[i]

        if(currentsum > maxsum){
            maxsum = currentsum
        }
        if(currentsum<0){
            currentsum = 0
        }
    }
    return maxsum
}
let nums = [-2,1,-3,4,-1,2,1,-5,4]
console.log(maxSubArray(nums))