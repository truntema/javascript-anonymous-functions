const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
const uniqueArr = (arr) => [...new Set(arr)];
const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");