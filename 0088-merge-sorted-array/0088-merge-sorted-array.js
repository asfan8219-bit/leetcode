/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1,m,nums2,n){

for(let i=0; i<n; i++){

nums1.push(nums2[i])

}
nums1.splice(m,n)

nums1.sort((a,b)=>(a-b))

}

let nums1 = [1,2,3,0,0,0]
let m = 3
let nums2= [2,5,6]
let n = 3

console.log(merge(nums1,m,nums2,n))

