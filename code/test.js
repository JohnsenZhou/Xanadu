function isStraight(nums) {
  let flag = true;
  let set = new Set();
  let min = 14;
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) continue;
    max = nums[i] > max ? nums[i] : max;
    min = nums[i] < min ? nums[i] : min;
    if (set.has(nums[i])) {
      flag = false;
      break;
    }
    set.add(nums[i]);
  }
  if (flag) {
    return max - min < 5;
  }
  return false;
}
console.log(isStraight([1, 2, 3, 4, 5]));
