/*
 * Given a sorted array that has been rotated some number of items right or
 * left, i.e. [0, 1, 2, 3, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2, 3]
 * how can you efficiently find an element? For simplicity, you can assume
 * that there are no duplicate elements in the array.
 *
 * rotatedArraySearch should return the index of the element if it is in the
 * array and should return null otherwise.
 *
 * For instance:
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) //=== 5
 *
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null
 *
 * Target time complexity: O(log(array.length))
 */

var rotatedArraySearch = function (matrix) {
  var rowCount = matrix.length;
  var colCount = matrix[0].length;
  var rotatedMatrix = [];
  for (var i = 0; i < colCount; i++) {
    rotatedMatrix = [];
    for (var j = 0; j < rowCount; j++) {
      rotatedMatrix[i][j] = matrix[rowCount - 1 - j][i];
    }
  }
  return rotatedMatrix;
};
