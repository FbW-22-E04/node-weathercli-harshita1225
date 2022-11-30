import axios from "axios";
// const dotenv = require("dotenv");
import dotenv from "dotenv";
dotenv.config();
//console.log("env is ", process.env.API);
const response = await axios.get(
  `https://api.openweathermap.org/data/2.5/weather?&q=${process.argv[2]}&appid=${process.env.API}&units=metric `
);
//console.log(response.data);

console.log(`@@@@@@@@@@@@@@@@@@@
@ WEATHER PROGRAM @
@@@@@@@@@@@@@@@@@@@`);
const result = response.data;
const fahrenheit = +result.main.temp * 1.8 + 32;
console.log(`It is now ${result.main.temp} C in ${result.name}, ${result.sys.country}
The current weather conditions are: ${result.weather[0].description}`);

console.log(`It is now ${fahrenheit} F in ${result.name}, ${result.sys.country}
The current weather conditions are: ${result.weather[0].description}`);

/* const responseDays = await axios.get(
  `https://api.openweathermap.org/data/2.5/forecast/daily?q=${process.argv[2]}&units=metric&cnt=7&appid=${process.env.API}`
);

console.log(responseDays.data); */
