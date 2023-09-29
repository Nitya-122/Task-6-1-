function isLeapYear(year) {
    if (year % 4 !== 0) {
        return false;
    }
    if (year % 100 === 0) { 
        if (year % 400 !== 0) {
            return false;
        }
    }
    return true;
}

const year = 2023;
if (isLeapYear(year)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}
