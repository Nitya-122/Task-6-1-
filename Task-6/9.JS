const calculator = (a, b, op) => {
    switch (op) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      case '/':
        if (b !== 0) {
          return a / b;
        } else {
          return "Division by zero is not allowed!";
        }
      default:
        return "Operator not found";
    }
  }
  const num1 = 3;
  const num2 = 5;
  const operator = '/';
  
  const result = calculator(num1, num2, operator);
  console.log(`Output: ${result}`);
  