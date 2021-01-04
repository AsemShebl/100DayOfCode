//Bubble Sort
/*
 * Bubble sort is the most basic sorting algorithm in all of Computer Sciencedom. 
 * It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 */

/*
  * I: Array
  * O: Sorted array
  * C: none
  * E: none
  */


function bubbleSort(arr){
    var len = arr.length;
    for (var i = len-1; i>=0; i--){
      for(var j = 1; j<=i; j++){
        if(arr[j-1]>arr[j]){
            var temp = arr[j-1];
            arr[j-1] = arr[j];
            arr[j] = temp;
         }
      }
    }
    return arr;
}
var array = [2, 5, 8, 10, 6, 9, 3];
bubbleSort(array); // [2, 3, 5, 6, 8, 9, 10]