function findSecondLowestAndGreatest(numbers) {
    if (numbers.length < 2) {
      return "Array should contain at least two numbers.";
    }
    numbers.sort(function(a, b) {
      return a - b;
    });
  
    const secondLowest = numbers[1]; 
    const secondGreatest = numbers[numbers.length - 2]; 
    return [secondLowest, secondGreatest];
  }
  const sampleArray = [1, 2, 3, 4, 5];
  const result = findSecondLowestAndGreatest(sampleArray);
  
  console.log("Second Lowest and Second Greatest:", result.join(", "));
  