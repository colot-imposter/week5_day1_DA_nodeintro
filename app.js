const moment = require('moment');
const chalk = require ('chalk');


const answer1= moment().format()
console.log(answer1);
const line1 =`It is ${chalk.blue(moment().format('dddd, MMM, do YYYY LTS'))}`
console.log(line1);
const line2 =`It is the ${chalk.blue(moment().format('DDDo'))} day of the year`
console.log(line2);
const line3 =`It is ${moment().format('s')} seconds into the day`
console.log(line3);

let DLS = chalk.red('')
function deeya(cheese) {
if (cheese === true){
    DLS += 'is'
  }
  else { DLS += "is not"}
}
let isDST = moment().isDST()
deeya(isDST)

const line4 =`It ${DLS} day lights savings time`
console.log(line4);

let isValid = moment().isValid()
deeya(isValid)
const line5 =`It ${DLS} not "a leap year"`
console.log(line5);
