function longestFall(nums) {
    let counter = 1;
    let maxCounter = 0;
  
    if (nums.length === 0) {
      return 0;
    }
  
    for (let i = 1; i < nums.length; i++) {
      // if the current number is < previous number
      if (nums[i] < nums[i - 1]) {
        counter++;
        maxCounter = Math.max(counter, maxCounter);
      } else {
        counter = 1;
      }
    }
  
    // 1 is the default val
    return maxCounter || 1;
}

module.exports = { longestFall }