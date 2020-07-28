const arr = [1, 2, 3, 3, 4, 5, 5];
function slice(arr = []) {
  let historyMap = {};
  let valueMap = {};
  let valueKey = 1;
  let temp;
  function loop(arr = [], valueKey) {
    if (Object.keys(historyMap).length === arr.length) return;
    for (let i = 0; i < arr.length; i++) {
      debugger;
      if (historyMap[i]) continue;
      if (temp) {
        if (arr[i] - temp === 0 && i < arr.length - 1) continue;
        if (arr[i] - temp === 1) {
          temp = arr[i];
          historyMap[i] = 1;
          valueMap[valueKey] = valueMap[valueKey] + 1;
        }
        if (
          i === arr.length - 1 &&
          Object.keys(historyMap).length < arr.length
        ) {
          temp = null;
          valueKey++;
          loop(arr, valueKey);
        }
      } else {
        temp = arr[i];
        historyMap[i] = 1;
        valueMap[valueKey] = valueMap[valueKey] ? valueMap[valueKey] + 1 : 1;
      }
    }
  }
  loop(arr, valueKey);
  return Object.keys(valueMap).every(key => valueMap[key] > 2);
}
console.log(slice(arr));
