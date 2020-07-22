function generate(arr) {
  let result = [];
  let i = 1;
  while (arr.length) {
    if (i % 2) {
      result.push(arr.shift());
    } else {
      arr.push(arr.shift());
    }
    i++;
  }
  return result;
}

function reverse(arr) {
  let i = 1;
  let out = [];
  while (arr.length) {
    if (i % 2) {
      out.unshift(arr.pop());
    } else {
      out.unshift(out.pop());
    }
    i++;
  }
  return out;
}

const dd = reverse([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
const ff = generate([1, 12, 2, 8, 3, 11, 4, 9, 5, 13, 6, 10, 7]);
console.log(dd, ff);
