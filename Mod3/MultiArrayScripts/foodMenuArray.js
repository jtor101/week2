"use strict"

var meal = 2;

let menu = [
    //Breakfast 
    [{ item: "Eggs Benedict", price: 3.51 },
        { item: "Sausage Links", price: 2.09 },
        { item: "Poached Eggs", price: 1.05 }
    ],

    //Lunch
    [{ item: "Grilled Chicken Wrap", price: 4.51 },
        { item: "Caesar Salad", price: 2.23 },
        { item: "Danish", price: 1.75 },
        { item: "Large Coffee", price: 1.05 }
    ],

    //Dinner
    [{ item: "Rib-Eye Steak", price: 8.55 },
        { item: "Lobster Mac & Cheese", price: 5.22 },
        { item: "Garden Salad", price: 2.35 },
        { item: "French Fries", price: 1.95 },
        { item: "Large Soft Drink", price: 1.15 }
    ]
];

// headings change
if (meal == 0) {
    console.log("Breakfast Menu")
} else if (meal == 1) {
    console.log("Lunch Menu")
} else if (meal == 2) {
    console.log("Dinner Menu")
};

// loop for menu item pulls.
let menuItems = menu.length;
for (let i = 0; i < menuItems; i++) {
    console.log("Team " + i);

    let menuItemsPrint = menu[i].length;
    for (let j = 0; j < menuItemsPrint; j++) {
        console.log(menu[i][j]);
    }
} // In progress