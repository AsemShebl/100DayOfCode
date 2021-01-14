/**
 *
 *  A pangram is a sentence that contains every single letter of the alphabet at least once.
 *  For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram,
 *  because it uses the letters A-Z at least once (case is irrelevant).
 *  Given a string, detect whether or not it is a pangram.
 *  Return True if it is, False if not. Ignore numbers and punctuation.
 */

function isPangram(string) {
  // Create a string of the alphabet
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  // Generate an empty object
  let alphaObj = {};
  // Boolean that we will eventually return
  let allLetters;
  // Loop over the string and construct an object with letter to integer for counts
  for (let i = 0; i < alpha.length; i++) {
    alphaObj[alpha.charAt(i)] = 0;
  }

  // Now we can condense the actual parameter value to a giant string of letters
  let condense = string.replace(/\s/g, "").split(",").toString();
  // After, we can loop over the string and if the alphaObj contains the property, increment the count
  for (let i = 0; i < condense.length; i++) {
    if (alphaObj.hasOwnProperty(condense.charAt(i).toLowerCase())) {
      alphaObj[condense.charAt(i).toLowerCase()] += 1;
    }
  }

  // finally, loop over the object and if all object properties have an amount that’s greater than 1, we can return true
  for (let item in alphaObj) {
    if (alphaObj[item] > 0) {
      allLetters = true;
    } else {
      allLetters = false;
      break;
    }
  }
  return allLetters;
}
