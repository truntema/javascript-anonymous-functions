const goToTop = () => window.scrollTo(0, 0);
const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
console.log("0 || 1 = "+(0 || 1));