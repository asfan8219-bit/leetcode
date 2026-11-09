/**
 * @param {number[]} nums
 * @return {number}
 */

function majorityElement(nums){
    nums.sort((a,b) => a-b)
    let middle = Math.floor(nums.length/2)
    return nums[middle]
}
let nums = [2, 2, 1, 1, 1, 2, 2];

console.log(majorityElement(nums));