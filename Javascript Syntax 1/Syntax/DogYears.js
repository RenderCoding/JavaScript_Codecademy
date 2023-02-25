//console.log((8*45)/30);
const myAge = "14";
// age
let earlyYears = "2";
// earlyYears of the dog
earlyYears *= 10.5;
let laterYears = myAge - 2;
// the first two years are already accounted for hence the substraction
laterYears *= 4;
// multiplying the remaining dog years
//console.log(earlyYears, laterYears);
const myAgeInDogYears = earlyYears + laterYears;
// the age in dog years
const myName = "Saba".toLowerCase();
console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);
