function multiple(num1, num2) {
  let num1Str = `${num1}`;
  let num2Str = `${num2}`;
  let resultArr = [];
  for (let i = num1Str.length - 1; i >= 0; i--) {
    for (let j = num2Str.length - 1; j >= 0; j--) {
      let index1 = i + j;
      let index2 = i + j + 1;
      let mul = num1Str[i] * num2Str[j] + (resultArr[index2] || 0);
      resultArr[index1] = Math.floor(mul / 10) + (resultArr[index1] || 0);
      resultArr[index2] = mul % 10;
    }
  }
  let result = resultArr.join("").replace(/^0+/, "");
  return result;
}
console.log(multiple(1000000300, 1000000000));
