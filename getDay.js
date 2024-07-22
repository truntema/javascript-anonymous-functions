const fullName = name || 'buddy';
const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const isEmptyObject = obj => Object.keys(obj).length === 0;