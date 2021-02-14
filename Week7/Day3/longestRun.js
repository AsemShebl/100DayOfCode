/**
 *
 * Given a string, finds the longest run of identical characters
 * and return an array containing the start and end indices of that run
 */

function longestRun(string) {
  var max = [0, 0];
  var curr = [0, 0];

  for (var i = 1; i < string.length; i++) {
    if (string[i - 1] === string[i]) {
      curr[1] = i; // curr:[1,2] [1,3]
      if (curr[1] - curr[0] > max[1] - max[0]) {
        //assign curr to max
        max = curr;
      }
    } else {
      curr = [i, i];
    }
  }

  return max;
}
