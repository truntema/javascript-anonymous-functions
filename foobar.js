const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;
console.log(1 +  "2" + "2");