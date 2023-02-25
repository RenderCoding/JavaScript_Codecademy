const kelvin = 0;
// the kelvin temperature is 293.
const celsius = kelvin - 273;
// converting celsius into kelvin.
let fahrenheit = celsius * (9 / 5) + 32;
// coverting the temperature into fahrenheit;
fahrenheit = Math.floor(fahrenheit);
// the Math.floor() used to round off the value;
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
fahrenheit = kelvin * (9 / 5) + 32;
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// NEWTON
let newton = celsius * (33 / 100);
newton = Math.floor(newton);
console.log(`In newton scale ${newton}`);
