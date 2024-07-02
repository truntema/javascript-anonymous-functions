const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
console.log("1 && 2 = "+(1 && 2));
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());