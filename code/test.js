function move(arr = []) {
  let j = 0;
  for (let i = 0; i < arr.length - j; i++) {
    if (arr[i] === 0) {
      arr.push(0);
      arr.splice(i, 1);
      i--;
      j++;
    }
  }
  return arr;
}
console.log(move([1, 2, 0, 5, 4, 0, 30]));
