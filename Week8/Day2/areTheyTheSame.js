/*
Description:
Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) that checks whether the two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
Examples
Valid arrays
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:
a = [121, 144, 19, 161, 19, 144, 19, 11] 
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
Invalid arrays
If we change the first number to something else, comp may not return true anymore:
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 132 is not the square of any number of a.
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 36100 is not the square of any number of a.
Remarks
a or b might be [] (all languages). a or b might be nil or null or None (except in Haskell, Elixir, C++).
If a or b are nil (or null or None), the problem doesn't make sense so return false.
If a or b are empty the result is evident by itself.
*/

///Solutions///

function comp(array, sub) {
  // if array or sub is null or undefined return false;
  if (!array || !sub) {
    return false;
  }
  var newArray = [];
  //two loops outer is the sub inner is the original
  for (var i = 0; i < sub.length; i++) {
    for (var j = 0; j < array.length; j++) {
      //conditional test if the square root of the value we are looking at in the sub
      //is equal to the original push to a newArray
      //then delete the value from the original
      //finally break out of inner loop and go to the next sub[i]
      if (Math.sqrt(sub[i]) === array[j]) {
        newArray.push(sub[i]);
        delete array[j];
        break;
      }
    }
  }

  // compare newArray to sub
  for (var k = 0; k < sub.length; k++) {
    if (newArray[k] !== sub[k]) {
      return false;
    }
  }
  return true;
}
