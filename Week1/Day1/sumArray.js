/*
 * Given an array of numbers, calculate the greatest 
   contiguous sum of numbers in it.
 * A single array item will count as a contiguous sum.
 *
 * example 1: sumArray([1, 2, 3]); // => 6   
 * example 2: sumArray([1, 2, 3, -4]); // 6
 * example 3: sumArray([1, 2, 3, -4, 5]); // 7     6-4=2+5=7   
 * example 4: sumArray([4, -1, 5]); // => 8        4-1=3+5=8
 * example 5: sumArray([10, -11, 11]); // 11
 */
// Solved in O(n) time with O(1) memory

/**
Solved in o(n) time with 0(1) memory

I: Array of numbers.
O: Greatest possible sum of contiguous numbed
C: -Linear time complexity O(n)
   -Constant Space Complexity O(1)
E: Greatest possible sum in negative
 */

var sumArray = function(array){
  var maxSum = Number.NEGATIVE_INFINITY;
  var currentSum;
  for (var start=0; start<array.length; start++){
    currentSum = 0
    for (var end = start; end<array.length; end++){
      currentSum += array[end];
      if (currentSum > maxSum){
        maxSum = currentSum;
      }
    }
  }
  return maxSum;
};

var array = [2,3,-4,3,4,-5,-4,6,9,10,-7,-2]
sumArray(array)//25

