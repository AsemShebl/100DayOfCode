//find the first most repeated number in the array
function Mode(arr) {
  let mode = 0;
  let obj = {};
  let highest = 0;
  for (let i = 0; i < arr.length; i++) {
    let thisnum = arr[i];
    obj[thisnum] === undefined ? (obj[thisnum] = 1) : (obj[thisnum] += 1);
    if (highest < obj[thisnum]) {
      highest = obj[thisnum];
      mode = thisnum;
    }
  }
  return mode;
}
console.log(Mode([1, 2, 3, 4, 5, 5, 6, 6, 6, 3]));
