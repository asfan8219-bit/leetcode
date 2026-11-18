/**
 * @param {number[]} nums
 * @return {number}
 */
function jump(nums){
    let jump = 0
    let currentend = 0
    let farthest = 0

    for(let i=0; i<nums.length-1; i++){
        let reach = i+nums[i]

        if(reach>farthest){
            farthest = reach
        }
        if(i===currentend){
            jump++
            currentend = farthest
        }
    }
    return jump 
}
let nums = [2,3,1,1,4] 
console.log(jump(nums))




