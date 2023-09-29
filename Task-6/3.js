function isFirstJanuarySunday(year) {
    const date = new Date(year, 0, 1); 
    return date.getDay() === 0; }
  
  for (let year = 2014; year <= 2050; year++) {
    if (isFirstJanuarySunday(year)) {
      console.log(`January 1st, ${year} is a Sunday.`);
    }
  }
  