/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let result = false
    for (let i = 0, len = nums.length; i < len; i++) {
        if (nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])) {
            return true;
        }
    }
    return result
};
// @lc code=end

