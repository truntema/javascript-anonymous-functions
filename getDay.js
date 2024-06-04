const resultingPromises = urls.map((url) => makHttpRequest(url));
const results = await Promise.all(resultingPromises);
console.log( "A" - "B" + 2);