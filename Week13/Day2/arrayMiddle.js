/*
Array Middle
Given an array of negative/positive integers, return the element in the center position of the array.
If the array has an even number of elements, return the average of the two middle elements instead.
Examples
Input	Output
numbers:
[ 200, 5, 100 ]	5
numbers:
[ 10, 20, 30, 40 ]	25
*/

function middle(numbers) {
  var arrayLen = numbers.length;
  var middleVal = 0;
  var middleIndex = 0;
  if (arrayLen % 2 !== 0) {
    middleIndex = Math.floor(arrayLen / 2);
    middleVal = numbers[middleIndex];
  } else {
    middleIndex = Math.floor(arrayLen / 2);
    middleVal = (numbers[middleIndex] + numbers[middleIndex - 1]) / 2;
  }
  return middleVal;
}
