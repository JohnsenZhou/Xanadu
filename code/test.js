const mult = function() {
  let result = 1
  for (let i = 0; i < arguments.length; i++) {
    result = result * arguments[i];
  }
  return result
}

const proxyMult = (function() {
  const cache = {}
  return function () {
    const args = Array.prototype.join.call(arguments, ',')
    if (args in cache) {
      return cache[args]
    }
    return cache[args] = mult.apply(this, arguments)
  }
})()
