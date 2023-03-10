// using .push() method as it add elements at end of an array
const reverseArray = (arr) => {
  let reversedArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }
  return reversedArray;
};

// using .unshift() method as it add elements at beginning of an array
const reverseArray2 = (arr) => {
  let reversedArray2 = [];
  for (let i = 0; i < arr.length; i++) {
    reversedArray2.unshift(arr[i]);
  }
  return reversedArray2;
};

const sentence = ["sense.", "make", "all", "will", "This"];

console.log(reverseArray(sentence));
console.log(reverseArray2(sentence));
