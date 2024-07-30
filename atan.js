const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());
const value = ( 5 < 7 ) ? "True" : "False" ;
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());