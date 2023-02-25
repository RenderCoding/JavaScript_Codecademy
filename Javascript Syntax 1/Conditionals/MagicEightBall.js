let userName = "Saba";
userName == "Saba" ? console.log("Hello Saba!") : console.log("Hello!");
const userQuestion = "Should I eat pizza tonight?";
console.log(userQuestion + " ~ " + userName);
// generate the random number
let randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber);
let eightBall = "";

// reply to the random number generated
switch (randomNumber) {
  case 0:
    console.log("It will happen soon");
    break;
  case 1:
    console.log("It is certain");
    break;
  case 2:
    console.log("It is decidedly so");
    break;
  case 3:
    console.log("Reply hazy try again");
    break;
  case 4:
    console.log("Cannot predict now");
    break;
  case 5:
    console.log("Do not count on it");
    break;
  case 6:
    console.log("My sources say no");
    break;
  case 7:
    console.log("Outlook not so good");
    break;
  default:
    console.log("Signs point to yes");
}
// if statement
if (randomNumber === 3) {
  console.log("My sources say no");
}
