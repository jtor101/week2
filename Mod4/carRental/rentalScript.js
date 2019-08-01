"use strict"

function numOfDaysCostCalc() {
    let numOfDaysField = document.getElementById("numOfDaysField");
    let numOfDaysCost = numOfDaysField.value * 29.99;
    return numOfDaysCost;
}

function vehicleTypeCalc() {
    let numOfDaysField = document.getElementById("numOfDaysField");
    let vehicleTypeSelect = document.getElementById("vehicleTypeSelect");
    let vehicleTypeCost;

    switch (vehicleTypeSelect.options[vehicleTypeSelect.selectedIndex].value) {
        case "eco":
            vehicleTypeCost = 0;
            break;
        case "com":
            vehicleTypeCost = (5 * numOfDaysField.value);
            break;
        case "mds":
            vehicleTypeCost = (10 * numOfDaysField.value);
            break;
        case "lux":
            vehicleTypeCost = (15 * numOfDaysField.value);
            break;
    }
    return vehicleTypeCost;
}

function optionsCostCalc() {
    let tollTagCBox = document.getElementById("tollTagCBox").checked;
    let gpsCBox = document.getElementById("gpsCBox").checked;
    let roadsideCBox = document.getElementById("roadsideCBox").checked;
    let optionsCost = 0;

    if (tollTagCBox) {
        optionsCost += 3.95;
    }
    if (gpsCBox) {
        optionsCost += 2.95;
    }
    if (roadsideCBox) {
        optionsCost += 2.95;
    }
    return optionsCost;
}

function surchargeCostCalc() {
    let under25NoRB = document.getElementById("under25No");
    let under25YesRB = document.getElementById("under25Yes");
    let under25sc;

    if (under25YesRB.checked) {
        under25sc = 0.3;
    } else {
        under25sc = 0;
    }
    return under25sc;
}

function totalPriceCalc() {
    let numOfDaysFinal = numOfDaysCostCalc();
    let optionsFinal = optionsCostCalc();
    let surchargeAmt = surchargeCostCalc();
    let selectedVehCost = vehicleTypeCalc();

    let surchargeFinal = numOfDaysFinal * surchargeAmt;

    document.getElementById("carRentalCostField").value = numOfDaysFinal.toFixed(2);
    document.getElementById("carTypeCostField").value = selectedVehCost.toFixed(2);

    document.getElementById("optionsCostField").value = optionsFinal.toFixed(2);
    document.getElementById("under25SurchargeField").value = surchargeFinal.toFixed(2);

    let totalCost = numOfDaysFinal + optionsFinal + surchargeFinal + selectedVehCost;

    document.getElementById("totalCostField").value = totalCost.toFixed(2);
}

window.onload = function() {
    // Button
    const totalCostBtn = document.getElementById("totalCostBtn");
    totalCostBtn.onclick = totalPriceCalc;
}

/*HTML IDs:
Pickup Date: id=pickupDateField
Number Of Days: id=numOfDaysField

Checkboxes:
Toll Tag: id=tollTagCBox
GPS: id=gpsCBox
Roadside: id=roadsideCBox

Radios:
No: id=under25No
Yes: id=under25Yes

Button:
id=totalCostBtn

Output:
Car Rental: id=carRentalCostField
Options: id=optionsCostField
Under 25: id=under25SurchargeField

Total Cost: id=totalCostField*/