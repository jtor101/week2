function createLabel(name, address, city, state, zip) {
    let label = {
        name: name,
        address: address,
        city: city,
        state: state,
        zip: zip
    };
    return label;
};

function printContact(label) {
    console.log(label.name);
    console.log(label.address);
    console.log(label.city + ", " + label.state + " " + label.zip);
};

let label1 = createLabel("Joe Smith", "122 3rd Street", "Vernon", "CT", "06066");
let label2 = createLabel("Jimmy Smits", "122 32nd Street", "South Windsor", "CT", "06074");

printContact(label1);
printContact(label2);