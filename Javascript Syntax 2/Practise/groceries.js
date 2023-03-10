/*
Write a function groceries() that takes 
an array of object literals of grocery items. The function should 
return a string with each item separated by a comma except the last two items should be separated by the word 'and'. Make sure spaces (' ') are inserted where they are appropriate.
*/

function groceries(arr){
    let newArray = arr.map( retrieve => retrieve.item);
     if( newArray.length < 2) {
      return newArray[0];
    } else {
   let final = newArray.pop(); 
   return `${newArray.join(', ')} and ${final}`
    }
  };
  
  console.log(groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}]));
  console.log(groceries( [{item: 'Bread'}, {item: 'Butter'}]));
  
  