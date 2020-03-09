class Events {
  constructor() {
    this.cache = []
  }
  listen(key, fn) {
    
  }
  trigger() {
    const key = Array.prototype.shift.call(arguments)
  }
}