var phoneDigitsToLetters = {
  0: "0",
  1: "1",
  2: "ABC",
  3: "DEF",
  4: "GHI",
  5: "JKL",
  6: "MNO",
  7: "PQRS",
  8: "TUV",
  9: "WXYZ",
};

var telephoneWords = function (digitString) {
  // make results array
  var words = [];
  // make inner recursive function (word, digitsLeft)
  var lettersForDigits = function (word, digits) {
    // base case: if no digits left, push word to results
    if (digits.length === 0) {
      return words.push(word);
    }
    // grab current digit from digitsLeft
    // for each letter option, add letter to word and recurse
    phoneDigitsToLetters[digits[0]].split("").forEach(function (letter) {
      lettersForDigits(word + letter, digits.slice(1));
    });
  };
  // invoke recursive function
  lettersForDigits("", digitString.split(""));
  // return results array
  return words;
};

telephoneWords("0002");
