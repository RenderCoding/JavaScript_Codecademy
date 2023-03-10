const shoutGreetings = (arr) => arr.map(el => el.toUpperCase() + '!');
/*
// ----------- Prior to removing 'return' and '{}' from both the functions --------
const shoutGreetings = (arr) => {
    let name = arr.map((el) => {
      return el.toUpperCase() + "!";
    });
    return name;
  };
*/
const greetings = ["hello", "hi", "heya", "oi", "hey", "yo"];
console.log(shoutGreetings(greetings));

  
  