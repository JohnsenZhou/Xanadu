function noop() {
  // 空方法，由子类重写
}
class Beverage {
  boilWater() {
    console.log("把水煮沸");
  }
  brew() {
    // 冲泡：空方法，由子类重写
  }
  pourInCup() {
    // 把饮料倒进杯子：空方法，由子类重写
  }
  addCondiments() {
    // 加调料：空方法，由子类重写
  }
  init() {
    this.boilWater();
    this.brew();
    this.pourInCup();
    this.addCondiments();
  }
}

class Coffee extends Beverage {
  brew() {
    console.log("用沸水冲泡咖啡");
  }
  pourInCup() {
    console.log("把咖啡倒进杯子");
  }
  addCondiments() {
    console.log("加糖和牛奶");
  }
}

const coffee = new Coffee();
coffee.init();

class Tea extends Beverage {
  brew() {
    console.log("用沸水浸泡茶叶");
  }
  pourInCup() {
    console.log("把茶水倒进杯子");
  }
  addCondiments() {
    console.log("加柠檬");
  }
}

const tea = new Tea();
tea.init();

class Beverage {
  brew() {
    throw new Error("必须重写brew方法");
  }
  pourInCup() {
    throw new Error("必须重写pourInCup方法");
  }
  addCondiments() {
    throw new Error("必须重写addCondiments方法");
  }
}
