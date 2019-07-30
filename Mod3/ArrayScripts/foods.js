function getCost(lunch) {
    let arrLength = lunch.length
    let sum = 0;

    for (let i = 0; i < arrLength; i++) {
        sum += lunch[i].price;
    }

    console.log("Subtotal: $" + sum.toFixed(2));
    let tax = sum * .08; // 8% tax

    console.log("Sales Tax: $" + tax.toFixed(2));
    let tip = sum * .18; // 18% tip

    console.log("Gratuity: $" + tip.toFixed(2));
    let finalLunchCost = sum + tax + tip;

    return finalLunchCost;
}

function printCost(finalLunchCost) {
    console.log("The final total of your lunch is $" + finalLunchCost.toFixed(2));
}

let lunch = getCost([
    { item: "Buffalo Chicken Wrap", price: 10.00 },
    { item: "Lobster Mac & Cheese", price: 12.00 },
    { item: "Clam Chowder", price: 8.00 }
]);

printCost(lunch);