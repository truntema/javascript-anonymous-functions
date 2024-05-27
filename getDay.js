console.log(typeof typeof 1);
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
const resultingPromises = urls.map((url) => makHttpRequest(url));