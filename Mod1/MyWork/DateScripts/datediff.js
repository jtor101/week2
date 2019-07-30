var date1 = new Date('July 30, 2019');
var date2 = new Date('September 15, 2019');

let msec_per_day = 1000 * 60 * 60 * 24 // msecs/sec * sec/min * min/hr * hr/day

let elapsedMilliseconds = date2.getTime() - date1.getTime();

let dayDiff = elapsedMilliseconds / msec_per_day;
let numDays = Math.round(dayDiff);

console.log("The number of days between dates is " + numDays);