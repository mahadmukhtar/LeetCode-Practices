/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const givenArray = JSON.parse(JSON.stringify(nums));
    for (let i = 0; i < nums.length; i++) {
        const firstNum = nums[i];
        nums[i] = null;
        let secondNumberIndex = nums.indexOf(target - firstNum);
        if (firstNum + givenArray[secondNumberIndex] === target) {
            return [i, secondNumberIndex];
        }
    }
    return [];
};