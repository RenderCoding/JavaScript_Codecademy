const isTheDinnerVegan = (arr) => 
  arr.every( food => food.source === 'plant');

// ---------------- With 'for loop' --------------------
const veganChecker = (arr) => {
  for(let i = 0; i < arr.length; i++){
   if (arr[i].source === 'plant') {
     return false 
   }
  }
  return true
};


const dinner = [
    {name: 'hamburger', source: 'meat'}, 
    {name: 'cheese', source: 'dairy'}, 
    {name: 'ketchup', source:'plant'}, 
    {name: 'bun', source: 'plant'}, 
    {name: 'dessert twinkies', source:'unknown'}
];

console.log(isTheDinnerVegan(dinner))
// Should print false
console.log(veganChecker(dinner))
