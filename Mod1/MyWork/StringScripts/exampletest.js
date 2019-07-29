function parseAndDisplayName(name) {
    let posStart = name.indexOf(" ");
    let posEnd = name.lastIndexOf(" ");
    let fname = name.slice(0, posStart + 1);
    let mname = name.slice(posStart + 1, posEnd + 1);
    let lname = name.slice(posEnd + 1, name.length);

    if (posStart < posEnd) {
        console.log("First Name: " + fname);
        console.log("Middle Name: " + mname);
        console.log("Last Name: " + lname);
    } else if (posStart >= 0 && posEnd >= 0) {
        console.log("First Name: " + fname);
        console.log("Last Name: " + lname);
    } else {
        console.log("Only Name: " + lname);
    }
}
parseAndDisplayName("Oprah")
parseAndDisplayName("Oprah J Winfrey")
parseAndDisplayName("Oprah Winfrey")