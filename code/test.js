Function.prototype.newBind = function (context) {
  self = this
  // 获取newBind函数从第二个参数到最后一个参数
  var args = Array.prototype.slice.call(arguments, 1)
  return function () {
    // 这个时候的arguments是指bind返回的函数传入的参数
    var bindArgs = Array.prototype.slice.call(arguments)
    return self.apply(context, args.concat(bindArgs))
  }
}
var my = {
  name: 'JohsnenZhou'
}
function say(age) {
  console.log(this.name, age)
}

var newSay = say.newBind(my,26)
newSay()