import axios from "axios";
// const dotenv = require("dotenv");
import colors from "colors";
import dotenv from "dotenv";
dotenv.config();
//console.log("env is ", process.env.API);
const response = await axios.get(
  `https://api.openweathermap.org/data/2.5/weather?&q=${process.argv[2]}&appid=${process.env.API}&units=metric `
);
//console.log(response.data);

colors.enable();
console.log(
  `@@@@@@@@@@@@@@@@@@@
@ WEATHER PROGRAM @
@@@@@@@@@@@@@@@@@@@`.red
);
const result = response.data;
const fahrenheit = +result.main.temp * 1.8 + 32;
console.log(
  `It is now ${result.main.temp} C in ${result.name}, ${result.sys.country}
The current weather conditions are: ${result.weather[0].description}`.blue
);

console.log(
  colors.yellow(`It is now ${fahrenheit} F in ${result.name}, ${result.sys.country}
The current weather conditions are: ${result.weather[0].description}`)
);

const responseDays = await axios.get(
  `https://api.openweathermap.org/data/2.5/forecast/daily?q=london&appid=${process.argv.API}&units=metric `
);

console.log(responseDays.data);
