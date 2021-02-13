// 1. Declare and assign the variables here:
let shuttleName = 'Determination';
let shuttleSpeed = 17500;
let marsDistance = 225000000;
let moonDistance = 384400
let mpk = .621;


// 2. Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof 'Determination');
console.log(typeof 17500);
console.log(typeof 225000000);
console.log(typeof 384400);
console.log(typeof .621);



// Code your solution to exercises 3 and 4 here:
let marsMiles = marsDistance * mpk;
let marsHours = marsMiles / shuttleSpeed;
let marsDays = marsHours / 24;

console.log(shuttleName + ' will take ' + marsDays + ' days to reach Mars.');
// Code your solution to exercise 5 here:
let moonMiles = moonDistance * mpk;
let moonHours = moonMiles / shuttleSpeed;
let moonDays = moonHours / 24;

console.log(shuttleName + ' will take ' + moonDays + ' days to reach the Moon.');