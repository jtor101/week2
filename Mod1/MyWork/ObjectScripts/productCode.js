// Code Parter Script using Objects
// by John Torres

// supplierCode:productNumber-size
// ACME:123-L   DI:12345-M  ACE:1-12

function parseProductCode(labelNumber) {
    let posStart = labelNumber.indexOf(":");
    let posEnd = labelNumber.indexOf("-");
    let prodCode = {
        supplierCode: labelNumber.slice(0, posStart),
        productNumber: labelNumber.slice(posStart + 1, posEnd),
        prodSize: labelNumber.slice(posEnd + 1, labelNumber.length)
    };
    return prodCode;
}

function printProductCode(prodCode) {
    console.log("Supplier Code: " + prodCode.supplierCode);
    console.log("Product Number: " + prodCode.productNumber);
    console.log("Product Size: " + prodCode.prodSize);
}

//let labelNumberArr = ["ACME:123-L", "DI:12345-M", "ACE:1-12"];

let labelNumber1 = parseProductCode("ACME:123-L");
let labelNumber2 = parseProductCode("DI:12345-M");
let labelNumber3 = parseProductCode("ACE:1-12")

printProductCode(labelNumber1);
printProductCode(labelNumber2);
printProductCode(labelNumber3);