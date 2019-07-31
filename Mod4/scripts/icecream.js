"use strict"

// Scoop Order & Calc
function scoopCounter() {
    let scoopCount = Number(document.getElementById("scoopCount").value);
    let scoopCost = 0;

    switch (scoopCount) {
        case 1:
            scoopCost = 2.50;
            break;
        case 2:
            scoopCost = 3.75;
            break;
        case 3:
            scoopCost = 5.00;
            break;
        case 4:
            scoopCost = 6.25;
            break;
        default:
            alert("That's not an option.");
    }
    return scoopCost;
}

// Toppings Order & Calc
function toppingSelect() {
    let extraCost = 0;

    let hotFudge = document.getElementById("hotFudge").checked;
    if (hotFudge) {
        extraCost += 1.25;
    }

    let sprinkles = document.getElementById("sprinkles").checked;
    if (sprinkles) {
        extraCost += 0.25;
    }

    let whippedCream = document.getElementById("whippedCream").checked;
    if (whippedCream) {
        extraCost += 0.75;
    }
    return extraCost;
}

// Total Price Calculation and Output
function totalPriceCalc() {
    let scoopCost = scoopCounter();
    let extraCost = toppingSelect();
    document.getElementById("dessertPrice").value = scoopCost + extraCost;
}

window.onload = function() {
    let priceCalcBtn = document.getElementById("totalPriceCalc");
    priceCalcBtn.onclick = totalPriceCalc;
}