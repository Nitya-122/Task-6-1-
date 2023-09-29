// Function to calculate the area of a triangle using Heron's formula
function calculateTriangleArea(a, b, c) {
  // Calculate the semi-perimeter
  const s = (a + b + c) / 2;

  // Calculate the area using Heron's formula
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

  return area;
}

// Given side lengths
const sidea = 5;
const sideb = 6;
const sidec = 7;

// Calculate the area
const TriangleArea = calculateTriangleArea(sidea, sideb, sidec);

// Display the result
console.log(`The area of the triangle with side lengths ${sidea}, ${sideb}, and ${sidec} is ${TriangleArea}`);
