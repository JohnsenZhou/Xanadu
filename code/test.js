const arr = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0]
];
function getNums(arr) {
  function loop(m, n) {
    if (arr[0][0] === 1 || arr[m - 1][n - 1] === 1) return 0;
    if (m < 2) {
      return arr[m - 1].includes(1) ? 0 : 1;
    }
    if (n < 2) {
      if (arr.some(item => item[0] === 1)) {
        return 0;
      }
      return 1;
    }
    return loop(m, n - 1) + loop(m - 1, n);
  }
  return loop(arr.length, arr[0].length);
}
console.log(getNums(arr));
