function print(num) {
  const result = [];
  for (let i = 0; i < num; i++) {
    if (
      i > 10 &&
      i
        .toString()
        .split("")
        .reverse()
        .join("") === i.toString()
    ) {
      result.push(i);
    }
  }
  return result;
}
console.log(print(30));
