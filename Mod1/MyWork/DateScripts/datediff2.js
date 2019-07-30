var date1 = new Date('July 30, 2019');

let msec_per_day = 1000 * 60 * 60 * 24; // msecs/sec * sec/min * min/hr * hr/day (86,400,000 milliseconds per day)
let msec_per90days = msec_per_day * 90; // milliseconds per 90 days. (7,776,000,000 per 90 days) (7,776,000 seconds per 90 days)
console.log(msec_per90days); // confirmed correct.

let millisecondsTo90 = date1.getTime() + msec_per90days;
var date2 = new Date; // unfinished