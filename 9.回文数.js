/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(typeof x !== 'number') {
        return false;
    }
    if(x<0) {
        return false;
    }
    if(x.toString() === x.toString().split('').reverse().join('')) {
        return true;
    } else {
        return false;
    }
};
// @lc code=end

