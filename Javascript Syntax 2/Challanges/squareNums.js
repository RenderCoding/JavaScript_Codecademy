const numbers = [2, 7, 9, 171, 52, 33, 14];

const toSquare = (num) => num * num;

const squareNums = (arr) => arr.map(toSquare);

console.log(squareNums(numbers));

/*
// ------------------- OR --------------------

const squareNums1 = (arr) => {
  let value = arr.map(el => el * el);
  console.log(value);
};

squareNums(numbers);

*/