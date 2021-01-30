function Queue() {
  collection = [];

  //to print out the collection
  this.print = function () {
    console.log(collection);
  };

  //to push the first item into the queue
  this.enqueue = function (element) {
    collection.push(element);
  };

  //to take an item off the queue
  this.dequeue = function () {
    return collection.shift();
  };

  //to return what item is at the front of the array without removing the item off of the array
  this.front = function () {
    return collection[0];
  };
  this.size = function () {
    return collection.length;
  };
  this.isEmpty = function () {
    return collection.length === 0;
  };
}

var q = new Queue();

q.enqueue("a");
q.enqueue("b");
q.enqueue("c");
q.print();
q.dequeue();
console.log(q.front());
q.print();
