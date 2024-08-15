// Sets Implementation (function based implementation)

function Sets() {
  var collection = []; // this collection will hold the set

  // Check the presence of the element
  this.has = (element) => {
    return collection.indexOf(element) !== -1;
  };

  // Returns all the values of the set
  this.values = () => {
    return collection;
  };

  // Add an item to the set and return true, false otherwise
  this.add = (element) => {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };

  // Remove an element from the set and return true else false
  this.remove = (element) => {
    if (this.has(element)) {
      index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };

  // Print the size of the collection
  this.size = () => {
    return collection.length;
  };

  // Return the union of two sets
  this.union = (otherSet) => {
    var unionSet = new Sets();
    var firstSet = this.values();
    var secondSet = otherSet.values();

    firstSet.forEach((elem) => {
      unionSet.add(elem);
    });

    secondSet.forEach((elem) => {
      unionSet.add(elem);
    });

    return unionSet;
  };

  // Return the intersection of two sets
  this.intersection = (otherSet) => {
    var commonSet = new Sets();
    var firstSet = this.values();

    firstSet.forEach((elem) => {
      if (otherSet.has(elem)) {
        commonSet.add(elem);
      }
    });
    return commonSet;
  };

  // Return the difference between the two sets
  this.difference = (otherSet) => {
    var diffSet = new Sets();
    var firstSet = this.values();

    firstSet.forEach((elem) => {
      if (!otherSet.has(elem)) {
        diffSet.add(elem);
      }
    });

    return diffSet;
  };

  // Check if the given set is the subset of other
  this.subset = (otherSet) => {
    var firstSet = this.values();

    return firstSet.every((elem) => {
      return otherSet.has(elem);
    });
  };
}

var setA = new Sets();
var setB = new Sets();

setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");

console.log("Output 1:", setA.subset(setB));
console.log(setA.intersection(setB).values());
console.log(setB.difference(setA).values());
