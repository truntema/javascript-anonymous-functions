const docsOutputPath = path.join(repositoryRootPath, 'docs', 'output');
const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);
const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);