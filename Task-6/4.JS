const currentDate = new Date();
const targetDate = new Date(currentDate.getFullYear(), 11, 25); 
const timeDifference = targetDate - currentDate;
const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24)); 
if (daysLeft < 0) {
  console.log("Christmas has already passed this year.");
} else if (daysLeft === 0) {
  console.log("Merry Christmas today!");
} else {
  console.log(`There are ${daysLeft} days left until Christmas!`);
}
