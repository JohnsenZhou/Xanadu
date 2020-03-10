class Events {
  constructor() {
    this.cache = {}
  }
  listen(key, fn) {
    if (!this.cache[key]) {
      this.cache[key] = []
    }
    this.cache[key].push(fn)
  }
  trigger() {
    const key = Array.prototype.shift.call(arguments)
    const fns = this.cache[key]
    if (!fns || fns.length === 0) return
    fns.forEach(fn => {
      fn.apply(this, arguments)
    })
  }
  remove(key, fn) {
    const fns = this.cache[key]
    if (!fns) return
    if (fn) {
      fns.forEach((item, index) => {
        if (item === fn) {
          fns.splice(index, 1)
        }
      })
    } else {
      fns.length = 0
      console.log(this.cache)
    }
  }
}

const salesOffices = new Events()

salesOffices.listen('88m2',fn1 = function(price) {
  console.log('88m2现在价格是111：', price)
})
salesOffices.listen('88m2',fn2 = function(price) {
  console.log('88m2现在价格是2222：', price)
})

salesOffices.listen('100m2', function(price) {
  console.log('100m2现在价格是：', price)
})