let d = new Date();
d.setFullYear(1955);
d.setMonth(11);
d.setDate(27);
console.log(d.toLocaleString());
d.setFullYear(1954);
d.setMonth(0);
d.setDate(4);
console.log(d.toLocaleString());

let dadBday = new Date("12/27/1955");
let momBday = new Date("Jan 04 1954");
let dadBday2 = new Date("1955, 12, 27");
console.log(dadBday.toLocaleString());
console.log(momBday.toLocaleString());
console.log(dadBday2.toLocaleString());