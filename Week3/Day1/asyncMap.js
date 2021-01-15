//Asynchronous Map
/*

* I: Array of asynchronous tasks, Callback function
* O: Result of our callback on the async map results in order
* C: Must maintain order
* E: -

*/

const asyncmap = function (tasks, callback) {
  //declare resultArray
  let resultsArray = [];
  //declare resultCount
  let resultsCount = 0;
  //iterate through tasks
  for (let i = 0; i < tasks.length; i++) {
    //invoke task with custom cb
    tasks[i](function (val) {
      //store result of cb correct spot in resultArra
      resultsArray[i] = val;
      //increment resultsCount
      resultsCount++;
      //if resultCount matches number of tasks
      if (resultsCount === tasks.length) {
        //call callback on resultsArray
        callback(resultsArray);
      }
    });
  }
};
