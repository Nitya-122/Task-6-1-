function sortStringAlphabetically(inputString) {
    return inputString.split('').sort().join('');
}

const inputString = 'webmaster';
const sortedString = sortStringAlphabetically(inputString);
console.log(sortedString); 