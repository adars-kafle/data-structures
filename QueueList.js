class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }

  // Add an element in the queue
  enqueue(data) {
    const newNode = new Node(data);

    if (this.isEmpty()) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }

    this.length++;
  }

  // Remove an item from the queue
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty!";
    }

    const data = this.front;
    this.front = this.front.next;
    this.length--;

    if (this.isEmpty()) {
      this.rear = null;
    }

    return data.value;
  }

  // Check if the queue is empty!
  isEmpty() {
    return this.length === 0;
  }

  // Get the front element of the queue
  getFront() {
    if (this.isEmpty()) {
      return "Queue is empty!";
    }
    return this.front.value;
  }

  // Get the rear element of the queue
  getRear() {
    if (this.isEmpty()) {
      return "Queue is empty!";
    }
    return this.rear.value;
  }

  // Get the size of the queue
  size() {
    return this.length;
  }

  // Display the queue
  displayQueue() {
    if (this.isEmpty()) {
      console.log("Queue is empty!");
      return;
    }

    let current = this.front;
    let queueValues = "";

    while (current) {
      queueValues += current.value + " ";
      current = current.next;
    }

    console.log("Queue: " + queueValues.trim());
  }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log("Front item:", queue.getFront());
console.log("Removed item:", queue.dequeue());
console.log("Rear item: ", queue.getRear());
console.log("Size of queue", queue.size());
console.log("Whole queue: ", queue.displayQueue());
