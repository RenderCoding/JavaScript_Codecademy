const convertToBaby = (arr) => {
    let baby = [];
    for ( let i = 0; i < arr.length; i++){
      arr[i] = 'baby '+ arr[i];
      baby.push(arr[i]);
    }
    return baby;
  };
  
  /*
  // --------------- with .map() ---------------------
  const convertToBaby = array => {
    let baby = [];
     array.map( (arr) => { baby.push('baby '+ arr);});
  return baby
  }
  ---------------------  OR  --------------------------
  const conversion = (arr) => {
   let array = arr.map((el) => { return 'baby ' + el});
   return array;
 };
  */
  
  const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
  
  console.log(convertToBaby(animals)) 
  
  