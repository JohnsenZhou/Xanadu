class Plane {
  constructor(name, time) {
    this.name = name;
    this.time = time;
    this.state = "waiting";
    this.otherPlanes = [];
  }
  addOtherPlane(plane) {
    this.otherPlanes.push(plane);
    return this;
  }
  landing() {
    console.log(this.name + "正在降落");
    this.state = "landing";
    this.otherPlanes.forEach(item => item.waiting());
  }
  waiting() {
    this.state = "waiting";
    console.log(this.name + "等待降落");
  }
  done() {
    this.state = "done";
    console.log(this.name + "降落成功，后面跟上");
    this.otherPlanes.forEach(item => item.state);
  }
}

const planeOne = new Plane("飞机一号", 1);
const planeTwo = new Plane("飞机二号", 2);
const planeThree = new Plane("飞机三号", 3);
planeOne.addOtherPlane(planeTwo).addOtherPlane(planeThree);
planeTwo.addOtherPlane(planeOne).addOtherPlane(planeThree);
planeThree.addOtherPlane(planeOne).addOtherPlane(planeTwo);
