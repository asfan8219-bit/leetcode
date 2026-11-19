/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums1) {
    let k = 0;

    for (let i = 0; i < nums1.length; i++) {
        if (nums1[i] !== 0) {
            nums1[k] = nums1[i];
            k++;
        }
    }

    for (let i = k; i < nums1.length; i++) {
        nums1[i] = 0;
    }

    return nums1;
}

let nums1 = [0, 1, 0, 3, 12];

console.log(moveZeroes(nums1));