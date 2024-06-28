const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);