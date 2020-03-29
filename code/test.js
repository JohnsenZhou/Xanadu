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
    if (this.state === "done") return;
    console.log(this.name + "正在降落");
    this.state = "landing";
    this.otherPlanes.forEach(plane => {
      if (plane.state === "waiting") {
        plane.waiting();
      }
    });
    // 设定开始降落后，2秒后自动执行降落成功
    setTimeout(() => this.done(), 2000);
  }
  waiting() {
    this.state = "waiting";
    console.log(this.name + "等待降落");
  }
  done() {
    this.state = "done";
    console.log(this.name + "降落成功，后面跟上");
    for (let i = 0, length = this.otherPlanes.length; i < length; i++) {
      if (this.otherPlanes[i].state === "waiting") {
        this.otherPlanes[i].landing();
        break;
      }
      console.log("全部飞机降落成功");
    }
  }
}

const planeOne = new Plane("飞机一号", 1);
const planeTwo = new Plane("飞机二号", 2);
const planeThree = new Plane("飞机三号", 3);
planeOne.addOtherPlane(planeTwo).addOtherPlane(planeThree);
planeTwo.addOtherPlane(planeOne).addOtherPlane(planeThree);
planeThree.addOtherPlane(planeOne).addOtherPlane(planeTwo);

class Plane {
  constructor(name, controlTower) {
    this.name = name;
    this.state = "waiting";
    this.controlTower = controlTower;
  }
  landing() {
    if (this.state === "done") return;
    console.log(this.name + "正在降落");
    this.state = "landing";
    this.controlTower.showPlaneState(this);
    // 设定开始降落后，2秒后自动执行降落成功
    setTimeout(() => this.done(), 2000);
  }
  waiting() {
    this.state = "waiting";
    console.log(this.name + "等待降落");
  }
  done() {
    this.state = "done";
    console.log(this.name + "降落成功，后面跟上");
    this.controlTower.callNextLanding(this);
  }
}

class ControlTower {
  constructor() {
    this.planes = [];
  }
  addPlane(plane) {
    this.planes.push(plane);
    return this;
  }
  showPlaneState(plane) {
    const waitingPlanes = this.planes.filter(
      item => item.name !== plane.name && item.state === "waiting"
    );
    waitingPlanes.forEach(item => item.waiting());
  }
  //
  callNextLanding(plane) {
    const waitingPlanes = this.planes.filter(
      item => item.name !== plane.name && item.state === "waiting"
    );
    if (waitingPlanes[0]) {
      waitingPlanes[0].landing();
    } else {
      console.log("全部飞机降落成功");
    }
  }
}

const controlTower = new ControlTower();

const planeOne = new Plane("飞机一号", controlTower);
const planeTwo = new Plane("飞机二号", controlTower);
const planeThree = new Plane("飞机三号", controlTower);

controlTower
  .addPlane(planeOne)
  .addPlane(planeTwo)
  .addPlane(planeThree);
planeOne.landing();
