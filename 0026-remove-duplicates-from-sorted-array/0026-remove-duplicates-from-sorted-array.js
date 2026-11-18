/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums){
    let result = []
    for(let i=0; i<nums.length; i++){
        if(!result.includes(nums[i])){
            result.push(nums[i])
        }
        for(let i=0; i<result.length; i++)
        nums[i]=result[i]
    }
    return result.length
}
let nums = [0,0,1,1,1,2,2,3,3,4];

console.log(removeDuplicates(nums));
console.log(nums);