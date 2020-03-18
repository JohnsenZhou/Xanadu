function noop() {
  // 空方法，由子类重写
}
class Beverage {
  boilWater() {
    console.log("把水煮沸");
  }
  brew() {
    // 冲泡过程：空方法，由子类重写
  }
  pourInCup() {
    // 空方法，由子类重写
  }
  addCondiments() {
    // 空方法，由子类重写
  }
  init() {
    this.boilWater();
    this.steepTeaBag();
    this.pourInCup();
    this.addCondiments();
  }
}

const tea = new Tea();
tea.init();
