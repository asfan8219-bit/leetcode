/**
 * @param {number[]} nums
 * @return {boolean}
 */
// function containsDuplicate(nums){

//     for(let i=0; i<nums.length; i++){
//         for(let j=i+1; j<nums.length; j++){
//             if(nums[i]==nums[j])
//             return true
//         }
//     }
//     return false

// }
// let  nums = [1,2,3,1]
// console.log(containsDuplicate(nums))

function containsDuplicate(nums){
    let set = new Set()

    for(let i=0; i<nums.length; i++){
        if(set.has(nums[i])){
            return true
        }
        set.add(nums[i])
    }
    return false
}
let nums = [1,1,1,3,3,4,3,2,4,2]
console.log(containsDuplicate(nums))