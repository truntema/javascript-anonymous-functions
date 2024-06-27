const channel = getChannel(computedAppVersion);
const isEmptyObject = obj => Object.keys(obj).length === 0;
const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];