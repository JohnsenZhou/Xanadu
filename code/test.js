var my = {
  name: 'JohsnenZhou'
}
function say(age, sex) {
  this.habit = 'shopping'
  console.log(this.name)
  console.log(age)
  console.log(sex)
}
say.prototype.friend = 'anna.'
var newSay = say.bind(my, 18)
var obj = new newSay('男')
// undefined
// 18
// 男
console.log(obj.friend) // anna.
console.log(obj.habit) // shopping