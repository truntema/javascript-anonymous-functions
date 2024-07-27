const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;