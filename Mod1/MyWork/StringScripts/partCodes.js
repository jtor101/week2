// Code Parter Script
// by John Torres

// supplierCode:productNumber-size
// ACME:123-L   DI:12345-M  ACE:1-12

function getSupplier(labelNumber) { // Returns all characters before the :
    let posStart = labelNumber.indexOf(":")
    let posEnd = labelNumber.indexOf("-")
    let supplierCode = labelNumber.slice(0, posStart);
    console.log("Supplier Code: " + supplierCode);
}



function getProductNumber(labelNumber) { // Returns all characters between the : and -
    let posStart = labelNumber.indexOf(":")
    let posEnd = labelNumber.indexOf("-")
    let productNumber = labelNumber.slice(posStart + 1, posEnd);
    console.log("Product Number: " + productNumber);
}



function getSize(labelNumber) { // Returns all characters after the -
    let posStart = labelNumber.indexOf(":")
    let posEnd = labelNumber.indexOf("-")
    let prodSize = labelNumber.slice(posEnd + 1, labelNumber.length);
    console.log("Size: " + prodSize);
}


getSupplier("ACME:123-L");
getProductNumber("ACME:123-L");
getSize("ACME:123-L");

getSupplier("DI:12345-M");
getProductNumber("DI:12345-M");
getSize("DI:12345-M");

getSupplier("ACE:1-12");
getProductNumber("ACE:1-12");
getSize("ACE:1-12");