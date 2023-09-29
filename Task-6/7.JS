function capitalizeWords(inputString) {
    const words = inputString.split(' ');
    const capitalizedWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });

    return capitalizedWords.join(' ');
}

const inputString = 'the quick brown fox';
const capitalizedString = capitalizeWords(inputString);
console.log(capitalizedString); 