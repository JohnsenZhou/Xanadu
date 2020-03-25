const ORDER_TYPE_RESERVED_500 = 1; // 预付500元定金用户
const ORDER_TYPE_RESERVED_200 = 2; // 预付200元定金用户
const ORDER_TYPE_NORMAL = 3; // 普通购买用户
const order500 = (orderType, payed, stock) => {
  if (payed && orderType === ORDER_TYPE_RESERVED_500) {
    console.log("500元定金预购，得到100优惠券");
  } else {
    // 未支付定金
    return "nextSuccessor";
  }
};

const order200 = (orderType, payed, stock) => {
  if (payed && orderType === ORDER_TYPE_RESERVED_200) {
    console.log("200元定金预购，得到50优惠券");
  } else {
    // 未支付定金
    return "nextSuccessor";
  }
};

const orderNormal = (orderType, payed, stock) => {
  if (stock > 0) {
    console.log("普通购买，无优惠券");
  } else {
    console.log("手机库存不足");
  }
};

class Chain {
  constructor(fn) {
    this.fn = fn;
    this.nextSuccessor = null;
  }
  setNextSuccessor(successor) {
    this.nextSuccessor = successor;
  }
  passRequest() {
    const result = this.fn.apply(this, arguments);
    if (result === "nextSuccessor") {
      return (
        this.nextSuccessor &&
        this.nextSuccessor.passRequest.apply(this.nextSuccessor, arguments)
      );
    }
    return result;
  }
}
const chainOrder500 = new Chain(order500);
const chainOrder200 = new Chain(order200);
const chainOrderNormal = new Chain(orderNormal);

chainOrder500.setNextSuccessor(chainOrder200);
chainOrder200.setNextSuccessor(chainOrderNormal);

chainOrder500.passRequest(1, true, 500);
chainOrder500.passRequest(2, true, 500);
chainOrder500.passRequest(3, true, 500);
chainOrder500.passRequest(1, false, 0);
