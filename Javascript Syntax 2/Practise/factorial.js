/*
Write a function factorial() that takes a number as an argument and returns the factorial of the number.
*/
const factorial = (num) => {
    let factor = 1;
    for(let i = 1; i <= num; i++){
      factor = i * factor
    }
    return factor
  };
  console.log(factorial(6));