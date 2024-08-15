// Queue Implementation (Array Based)

class Queue {
  constructor() {
    this.collection = [];
  }

  // Display the queue
  print() {
    console.log(this.collection);
  }

  // Insert an item into the queue
  enqueue(data) {
    this.collection.push(data);
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is empty!");
      return;
    }
    // Remove the first element, if the stack is non-empty
    return this.collection.shift();
  }

  isEmpty() {
    // Return true if the length of the collection is 0
    return this.collection.length === 0;
  }

  // Get the front element of the queue
  front() {
    if (this.isEmpty()) {
      console.log("Queue is empty!");
      return;
    }

    return this.collection[0];
  }

  // Get the rear element of the queue
  rear() {
    if (this.isEmpty()) {
      console.log("Queue is empty!");
      return;
    }

    return this.collection[this.size() - 1];
  }

  // Get size of the queue
  size() {
    return this.collection.length;
  }

  // Print the elements in the queue
  printQueue() {
    return this.collection.join(" ");
  }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log("Queue: ", queue.printQueue());
console.log("Removed item: ", queue.dequeue());
console.log("Queue: ", queue.printQueue());
console.log("Front Item: ", queue.front());
console.log("Rear Item: ", queue.rear());
console.log("Size of Queue: ", queue.size());
