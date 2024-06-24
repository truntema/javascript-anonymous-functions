const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");
const appName = getAppName(channel);
const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;