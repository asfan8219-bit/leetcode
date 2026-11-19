/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

function removeElement(nums,val){
    let result = []
    for(let i=0; i<nums.length; i++){
        if(nums[i]!==val){
            result.push(nums[i])
        }
    }
    for(let i=0; i<nums.length; i++){
        nums[i]=result[i]
    }
    return result.length
}
console.log(removeElement([3,2,2,3],3))
