function find(arr = [], num) {
  const len = arr.length
  let map = {}
  let temp = 0
  for (let i = 0; i < len; i++) {
    temp = 0
    for (let j = i; j < len; j++) {
      temp += arr[j]
      if (temp === num) {
        map[j - i] = [i, j]
      }
    }
  }
  if (Object.keys(map).length) {
    const key = Math.min(...Object.keys(map))
    return arr.slice(map[key][0], map[key][1] + 1)
  }
  return 0
}