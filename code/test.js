function twoSum(nums = [], target) {
  let result;
  for (let i = 0; i < nums.length; i++) {
    if (result) break;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result = [i, j];
        break;
      }
    }
  }
  return result;
}
console.log(twoSum([1, 2, 3, 4, 5], 5));
