/**
 * What are closures in javaScript and how and where to use them.
 * So what is closure in javascript?
 * "whenever you declare a function inside another function, the
 *  inside function(s) is/are recreated again each time the outside function is called"
 * "Closures are functions that refer to independent (free) variables. In other words, the
 *  function defined in the closure 'remembers' the environment in which it was created."
 * Closures are nothing but FUNCTIONS WITH PRESERVED DATA"
 */

var addTo = function (passed) {
  var add = function (inner) {
    return passed + inner;
  };
  return add;
};

var addThree = new addTo(3);
var addFour = new addTo(4);
// the inner value 3 & 4
