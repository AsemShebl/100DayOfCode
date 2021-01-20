/*Alphabet Inventory
Given an alphabet and a string of text, 
write a method that tallies the count of each letter defined in said alphabet (case insensitive), 
then return the result of this tally.
Examples
Input											Output
alphabet:
"aBc"
text:
"aabbccdd"						        		"a:2,b:2,c:2"
*/

///Solution///

function alphaCount(alpha, string) {
  var object = {};
  var array = [];
  var x = "no matches";
  alpha = alpha.toLowerCase();
  string = string.toLowerCase();

  for (var i = 0; i < alpha.length; i += 1) {
    object[alpha[i]] = 0;
  }
  for (var j = 0; j < string.length; j += 1) {
    if (alpha.includes(string[j])) {
      object[string[j]] += 1;
    }
  }
  for (var k = 0; k < alpha.length; k += 1) {
    if (object[alpha[k]] > 0) {
      array.push(alpha[k] + ":" + object[alpha[k]]);
    }
  }
  if (array[0] === undefined) {
    return x;
  } else {
    array = array.join();
  }
  return array;
}
