function isValidSubsequence(array, sequence) {
  var p1 = 0;
  var p2 = 0;
  while (p1 < array.length && p2 < sequence.length) {
    if (array[p1] === sequence[p2]) {
      p2++;
    }
    p1++;
  }
  return p2 === sequence.length;
}
array = [1, 2, 3, 4, 5];
sequence = [2, 4, 5];

//sample output true
