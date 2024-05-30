const isWeekday = (date) => date.getDay() % 6 !== 0;
const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;
const merge = [...new Set([...a, ...b])];