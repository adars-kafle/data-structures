//Stack Implementation
/**
 * Functions of stacks:
 * push: pust an item to the top of the stack
 * pop: remote an item from the top
 * peek: print the item at the top of the stack
 * display: display the stack
 */

class Stack {
  constructor() {
    this.count = 0;
    this.storage = {};
  }

  // Insert an item at the top of the stack
  push = (data) => {
    this.storage[this.count] = data;
    this.count++;
  };

  // Remove an item from the top of the stack
  pop = () => {
    if (this.count === 0) {
      console.error("Stack underflow!");
      return;
    }
    this.count--;
    let data = this.storage[this.count];
    delete this.storage[this.count];
    return data;
  };

  // Print the length of the stack
  size = () => {
    return this.count;
  };

  // Print the item at the top of the stack
  peek = () => {
    return this.storage[this.count - 1];
  };

  // Print the stack
  display = () => {
    console.log(this.storage);
  };
}

const stack = new Stack();

stack.push(10);
stack.push(50);
stack.push(27);
stack.push(88);

stack.display();
console.log(stack.size());

console.log(stack.pop());

stack.push("Armadilo");
stack.push("Antelope");

console.log(stack.peek());

console.log(stack.pop());
console.log(stack.pop());
