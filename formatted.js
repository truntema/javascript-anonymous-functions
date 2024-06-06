const isEmptyObject = obj => Object.keys(obj).length === 0;
const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);
const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;