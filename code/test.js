function triangleNumber(nums = []) {
  let result = 0;
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      for (let k = 0; k < len; k++) {
        if (
          nums[i] + nums[j] > nums[k] &&
          nums[i] + nums[k] > nums[j] &&
          nums[k] + nums[j] > nums[i]
        ) {
          result += 1;
        }
      }
    }
  }
  return result;
}
