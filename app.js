const moment = require('moment');
const chalk = require ('chalk');


const answer1= moment().format()
console.log(answer1);
const line1 =`It is ${moment().format('dddd, MMM, do YYYY LTS')}`
console.log(chalk.blue(line1));
const line2 =`It is the ${chalk.blue(moment().format('DDDo'))} day of the year`
console.log(line2);
const line3 =`It is ${chalk.magenta(moment().get('hour') * 60 * 60 + moment().get('minute') * 60 + moment().get('second'))} seconds into the day`
console.log(line3);

let isDST = (moment().isDST() ? ' is' : ' is not')
console.log('It' + chalk.green(isDST) + ' during DayLight Savings Time.');

let isValid = (moment().isValid() ? 'is' : 'is not')
let line5 =`It ${chalk.red(isValid)} a leap year`
console.log(line5);





// let DLS = chalk.red('')
// function deeya(cheese) {
// if (cheese === true){
//     DLS += 'is'
//   }
//   else { DLS += "not"}
// }
// let isDST = moment().isDST()
// deeya(isDST)
//
// const line4 =`It ${DLS} day lights savings time`
// console.log(line4);

// let isValid = moment().isValid()
// deeya(isValid)
// const line5 =`It ${DLS} not "a leap year"`
// console.log(line5);
