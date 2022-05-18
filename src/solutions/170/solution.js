// NOTE: 문제 링크 = https://leetcode.com/problems/two-sum-iii-data-structure-design/

var TwoSum = function() {
  this.data = [];
  this.map = new Map();
};

/**
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function(number) {
  for (const num of this.data) {
    this.map.set(num + number, true);
  }
  this.data.push(number);
};

/**
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function(value) {
  return this.map.has(value);
};

/**
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */