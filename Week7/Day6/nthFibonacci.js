let fibonacci = (num) => {
  //initalize
  let a = 0;
  let b = 1;

  //to store the sum
  let c = 0;

  //iterate till the given num
  for (let i = 2; i <= num; i++) {
    //sum of last two numbers
    c = a + b;

    //assign the last value to first
    a = b;

    //assign the sum to the last
    b = c;
  }

  //if the num is 0 then return a else return b;
  return num ? b : a;
};
