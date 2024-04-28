var uAgent = (typeof navigator !== 'undefined') ? navigator.userAgent : null;
console.log(['foo', 'bar'].concat(['baz', 'qux'].reverse().slice(1)).join(' ').replace(/a/i, 'ee').toUpperCase());
const apmRootPath = path.join(repositoryRootPath, 'apm');
const currentDate = () => new Date().toLocaleDateString('en-US');