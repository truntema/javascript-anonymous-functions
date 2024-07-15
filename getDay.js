const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
const scriptRootPath = path.join(repositoryRootPath, 'script');
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());