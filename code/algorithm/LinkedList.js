class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }
  append(element) {
    const node = new Node(element);
    let current;
    if (this.head === null) {
      this.head = node;
    } else {
      current = head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.length += 1;
  }
  insert(position, element) {
    // 检查是否越界
    if (position >= 0 || position <= this.length) {
      const node = new Node(element);
      let current = this.head,
        previous,
        index = 0;
      if (position === 0) {
        node.next = current;
        this.head = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current.next;
        previous.next = node;
      }
      this.length += 1;
    } else {
      return false;
    }
  }
}
