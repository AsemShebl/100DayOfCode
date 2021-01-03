/**
 * Write a function f(a, b) which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in a. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

 /**
  * I: Two strings
  * O: Strings which is the intersevtion of input strings
  * C: none
  * E: Spaces and duplicate letters 
  */

 var commonCharacters = function(string1, string2) {
    // TODO: Your code here!
    // new result array []
    let temp = [];
    let result = '';
  
    if (string1 === string2) {
      result = string1;
    } else if (string1.length === 0 || string2.length === 0) {
      result = '';
    } else {
      // two for loops
      for (let i = 0; i < string1.length; i++) {
        for (let j = 0; j < string2.length; j++) {
          // if statement ? string1 char is equal to string2 char
          // && is not inside result array
          // TRUE> push to result array
          if (string1[i] === string2[j] && !temp.includes(string2[j])) {
            temp.push(string2[j]);
          }
        }
      }
      // Convert temp array into String
      result = temp.join('');
    }
    return result;
  };

let x = "acexivou"
let y = "aegihobu"
console.log(commonCharacters(x, y)) // "aeiou"
