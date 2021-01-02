/*
 * Find first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
*/

/*
* I: arr of nums/strings
* O: the first item occur even # of times
* edge: empty array
*/

function evenOccurrence (array) {
    var obj = {};
    if (array.length === 0) {
      return null;
    }
    for (var i = 0; i < array.length; i++) {
      if (obj.hasOwnProperty(array[i])) {
        obj[array[i]]++;
      } else {
        obj[array[i]] = 1;
      }
    }
    for (var j = 0; j < array.length; j++) {
      if (obj[array[j]] % 2 === 0) {
        return array[j];
      }
    }
    return null;
}

let x = [1,5,6,8,7,5,9,3];
console.log(evenOccurrence(x)); // 5

let animals = ["Cat", "Panda", "Penguin", "Dog", "Penguin", "Lion"];
console.log(evenOccurrence(animals)); // Penguin