const veggies = ["broccoli", "spinach", "cauliflower", "broccoflower"];

const politelyDecline = (veg) => {
  console.log("No " + veg + " please. I will have pizza with extra cheese.");
};

const declineEverything = (arr) => {
  arr.forEach(politelyDecline); // it returns the function 'politelyDecline'
  // not the return of the functon 'politelyDecline()'
};
//declineEverything(veggies);

const acceptEverything = (arr) => {
  arr.forEach((el) => {
    console.log(`Ok, I guess I will eat some ${el}.`);
  });
};
acceptEverything(veggies);

