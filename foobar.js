const stringReverse = str => str.split("").reverse().join("");
const resultingPromises = urls.map((url) => makHttpRequest(url));