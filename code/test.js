// 递归
function sum(num) {
  if (num <= 2) return num;
  return sum(num - 1) + sum(num - 2);
}

// 动态规划
function sum(num) {
  if (num <= 2) return num;
  let a = 1;
  let b = 2;
  let temp = 0;
  for (let i = 3; i < num; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return temp;
}
console.log(sum(100));
