function sum(num) {
  if (num <= 2) return num;
  return sum(num - 1) + sum(num - 2);
}
console.log(sum(5));
