const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let d = new Date();

let monthName = months[d.getMonth()];
let currentDayOfWeek = daysOfWeek[d.getDay()];

let currentYear = d.getFullYear();
let currentDate = d.getDate();

console.log(currentDate + "-" + monthName + "-" + currentYear + " (" + currentDayOfWeek + ")");