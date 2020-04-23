/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    var result = false;
    for(var i=0; i<nums.length; i++) {
        if(nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])) {
            let m = nums.indexOf(nums[i])
            let n = nums.lastIndexOf(nums[i]);
            let val = Math.abs(m-n);
            if(val>k) {
                return false;
            } else {
                return true;
            }
        }
    }
};
// @lc code=end

