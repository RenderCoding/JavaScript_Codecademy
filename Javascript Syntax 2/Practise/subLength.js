/* 
Write a function subLength() that takes 2 parameters, a string and a single character. 
The function should search the string for the two occurrences of the character 
and return the length between them including the 2 characters. 
If there are less than 2 or more than 2 occurrences of the character the function should return 0.
*/

const subLength = (name, char) => {
    let count = 0;
    let firstIndex, secondIndex;
     for(let i = 0; i <= name.length -1; i++) {
      if(name[i] === char ) {
        count++;
          if(count > 2){
            return 0;
          }
        if(firstIndex === undefined){
          firstIndex = i
        } else {
          lastIndex = i + 1;
        }
      }
  }
  return count < 2 ? 0 : lastIndex - firstIndex; 
  };
  
  console.log(subLength('Saturday', 'a'));