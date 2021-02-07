// 1. Declare and assign the variables here:
let shuttleName = 'Determination';
let shuttlespeed = 17500;
let marsdistance = 225000000;
let moondistance = 384400
let mpk = .621;


// 2. Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof 'Determination');
console.log(typeof 17500);
console.log(typeof 225000000);
console.log(typeof 384400);
console.log(typeof .621);



// Code your solution to exercises 3 and 4 here:
let marsmiles = marsdistance * mpk;
let marshours = marsmiles / shuttlespeed;
let marsdays = marshours / 24;

console.log(shuttleName + ' will take ' + marsdays + ' days to reach Mars.');
// Code your solution to exercise 5 here:
let moonmiles = moondistance * mpk;
let moonhours = moonmiles / shuttlespeed;
let moondays = moonhours / 24;

console.log(shuttleName + ' will take ' + moondays + ' days to reach the Moon.');