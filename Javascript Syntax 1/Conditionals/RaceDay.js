let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
let age = 18;

if (age > 18 && registeredEarly) {
  raceNumber += 1000;
}
if (age > 18 && registeredEarly) {
  console.log(`The race with start at 9:30am for: ${raceNumber}.`);
} else if (age > 18 && !registeredEarly) {
  console.log(`The race with start at 11:00am for: ${raceNumber}.`);
} else if (age < 18) {
  console.log(`The race with start at 11:00am for: ${raceNumber}.`);
} else {
  console.log(`Please approach a registartion desk.`);
}
