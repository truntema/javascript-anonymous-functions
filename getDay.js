var arr2 = arr1.reverse();
const randomBoolean = () => Math.random() >= 0.5;
const copyToClipboard = (text) => navigator.clipboard.writeText(text);
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const added = [0, 1, 2, 3, 4].map((item) => item + 1);