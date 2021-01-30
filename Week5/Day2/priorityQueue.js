function PriorityQueue() {
  var collection = [];
  this.printCollection = function () {
    console.log(collection);
  };
  this.enqueue = function (element) {
    if (this.isEmpty()) {
      collection.push(element);
      //if the array is empty there's no need to check priorities
    } else {
      var added = false;
      //run for loop to check what priorities are
      for (var i = 0; i < collection.length; i++) {
        if (element[1] < collection[i][1]) {
          //checking priorities
          collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        collection.push(element);
      }
    }
  };
  this.dequeue = function () {
    var value = collection.shift();
    return value[0];
  };
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

var pq = new PriorityQueue();
pq.enqueue(["Alaa", 2]);
pq.enqueue(["Shebl", 3]);
pq.enqueue(["Asem", 1]);
pq.enqueue(["Mohamed", 2]);
//if more than one have the same priority, what comes first is pushed first
pq.printCollection();
pq.dequeue();
pq.printCollection();
