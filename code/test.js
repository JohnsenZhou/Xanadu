class OrderBox {
  constructor(name) {
    this.name = name;
    this.products = [];
  }
  add(product) {
    this.products.push(product);
  }
  sum() {
    let result = 0;
    this.products.forEach(item => {
      result = result + item.sum();
    });
    console.log(`开始计算${this.name}下总金额，结果为${result}`);
    return result;
  }
}
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  add() {
    throw new Error("已是产品类型，没法继续添加产品");
  }
  sum() {
    return this.price;
  }
}

const order = new OrderBox("总订单");
const order1 = new OrderBox("订单1");
const order2 = new OrderBox("订单2");
const order3 = new OrderBox("订单3");

const product1 = new Product("产品1", 2);
const product2 = new Product("产品2", 33);
const product3 = new Product("产品3", 44);
const product4 = new Product("产品4", 55);
const product5 = new Product("产品5", 66);

order1.add(product1);
order1.add(product2);
order3.add(product3);
order2.add(product4);
order2.add(order3);

order.add(order1);
order.add(order2);
order.add(product5);

order.sum();

// 开始计算订单1下总金额，结果为35
// 开始计算订单3下总金额，结果为44
// 开始计算订单2下总金额，结果为99
// 开始计算总订单下总金额，结果为200
