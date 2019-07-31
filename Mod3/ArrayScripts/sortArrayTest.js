/*function compareAscendingNumber(a, b) { // if a is smaller, a-b is negative, do not swap.
    return a - b;
}

let numbers = [3, 27, 400, 1, 111, 5];

console.log(numbers.sort(compareAscendingNumber));
// Results: 1, 3, 5, 27, 111, 400
// change return equation to b - a for descending.*/

let objs = [
    { name: "Dana", age: 60 },
    { name: "Natalie", age: 35 },
    { name: "Brittany", age: 33 },
    { name: "Zachary", age: 29 }
]

/*objs.sort(function(a, b) { // Descending by Name
    if (a.name <= b.name)
        return -1
    else
        return 1;
});*/

/*objs.sort(function(a, b) { // Ascending by Name
    if (a.name >= b.name)
        return -1
    else
        return 1;
});*/

/*objs.sort(function(a, b) { // Ascending by Age
    if (a.age < b.age)
        return -1
    else
        return 1;
});*/

objs.sort(function(a, b) { // Descending by Age
    if (a.age > b.age)
        return -1
    else
        return 1;
});

let len = objs.length;
for (let i = 0; i < len; i++) {
    console.log(objs[i]);
}