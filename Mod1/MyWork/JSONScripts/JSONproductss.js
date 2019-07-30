let productInfo = {
    productId: "123",
    productName: "Box",
    unitPrice: 1,
    quantity: 5,
};

let str = JSON.stringify(productInfo);

console.log("This is stringified: " + str + "\n");

let prod = JSON.parse(str);

console.log("This is parsed: " + prod.productId);
console.log("This is parsed: " + prod.productName);
console.log("This is parsed: " + prod.unitPrice);
console.log("This is parsed: " + prod.quantity);