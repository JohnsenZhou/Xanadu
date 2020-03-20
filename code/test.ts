abstract class Beverage {
  boilWater() {
    console.log("把水煮沸");
  }
  customerWantsCondiments() {
    return true; // 默认加调料
  }
  abstract brew(): void;
  abstract pourInCup(): void;
  abstract addCondiments(): void;
  init() {
    this.boilWater();
    this.brew();
    this.pourInCup();
    if (this.customerWantsCondiments()) {
      this.addCondiments();
    }
  }
}
class CoffeeWithHook extends Beverage {
  brew() {
    console.log("用沸水冲泡咖啡");
  }
  pourInCup() {
    console.log("把咖啡倒进杯子");
  }
  addCondiments() {
    console.log("加糖和牛奶");
  }
  customerWantsCondiments() {
    return window.confirm("请问需要加调料吗？");
  }
}
const coffeeWithHook = new CoffeeWithHook();
coffeeWithHook.init();
