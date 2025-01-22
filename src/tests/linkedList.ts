class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  toString() {
    return `${this.value}`;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  prepend(value) {
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }

    this.size++;
    return this;
  }

  append(value) {
    const newNode = new LinkedListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;
    return this;
  }

  insertAfter(value, prevNode) {
    if (!prevNode) {
      return this.append(value);
    }

    const newNode = new LinkedListNode(value);

    newNode.next = prevNode.next;
    prevNode.next = newNode;

    if (newNode.next === null) {
      this.tail = newNode;
    }

    this.size++;
    return this;
  }

  find(value, callback = null) {
    let currentNode = this.head;

    while (currentNode) {
      if (callback && callback(currentNode)) {
        return currentNode;
      }

      if (currentNode.value === value) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  }

  delete(value) {
    if (!this.head) {
      return null;
    }

    let deletedNode = null;

    // Удаление головных узлов с совпадающим значением
    while (this.head && this.head.value === value) {
      deletedNode = this.head;
      this.head = this.head.next;
      this.size--;
    }

    let currentNode = this.head;

    // Удаление узлов в середине списка
    while (currentNode && currentNode.next) {
      if (currentNode.next.value === value) {
        deletedNode = currentNode.next;
        currentNode.next = currentNode.next.next;

        this.size--;
      } else {
        currentNode = currentNode.next;
      }
    }

    // Удаление хвоста, если значение совпадает
    if (this.tail?.value === value) {
      this.tail = currentNode;
    }

    return deletedNode;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  toArray() {
    const nodes = [];

    let currentNode = this.head;

    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }

  toString() {
    return this.toArray()
      .map((node) => node.toString())
      .join(', ');
  }
}

const linked = new LinkedList();

linked.append(1).append(2).append(3);
console.log(linked.toString()); // 1, 2, 3
console.log(`Size: ${linked.size}`); // Size: 3

linked.prepend(0);
console.log(linked.toString()); // 0, 1, 2, 3
console.log(`Size: ${linked.size}`); // Size: 4

linked.insertAfter(1.5, linked.find(1));
console.log(linked.toString()); // 0, 1, 1.5, 2, 3
console.log(`Size: ${linked.size}`); // Size: 5

linked.delete(1.5);
console.log(linked.toString()); // 0, 1, 2, 3
console.log(`Size: ${linked.size}`); // Size: 4

linked.clear();
console.log(linked.toString()); // (empty string)
console.log(`Size: ${linked.size}`); // Size: 0

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
  if (!head) return null;

  let prev: ListNode | null = null;

  while (head) {
    const next = head.next;

    head.next = prev;
    prev = head;

    head = next;
  }
}
