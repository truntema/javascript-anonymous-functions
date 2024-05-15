const resultingPromises = urls.map((url) => makHttpRequest(url));
var regexp  = new RegExp('{{([^}]+)}}', 'g');