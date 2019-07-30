function parseAndDisplayName(name) {
    let posPre = name.indexOf(".");
    let posStart = name.indexOf(" ");
    let posEnd = name.lastIndexOf(" ");
    let posSuff = name.indexOf(",");

    let preName = name.slice(0, posPre + 1);
    let fname = name.slice(posPre + 1, posStart + 1);
    let mname = name.slice(posStart + 1, posEnd + 1);
    let lname = name.slice(posEnd + 1, posSuff);
    let suffName = name.slice(posSuff + 1, name.length);

    if (posPre > 0 && posSuff > 0) { // Both Prefix and Suffix appear
        console.log("Prefix: " + preName);
        console.log("First Name: " + fname);
        console.log("Middle Name: " + mname);
        console.log("Last Name: " + lname);
        console.log("Suffix: " + suffName);
        console.log("");
    } else if (posStart < posEnd && posPre > -1 && posSuff < 0) { // Prefix appears but Suffix does not.
        console.log("Prefix: " + preName);
        console.log("First Name: " + fname);
        console.log("Middle Name: " + mname);
        console.log("Last Name: " + lname);
        console.log("");
    } else if (posStart < posEnd && posPre < 0 && posSuff > 0) { // Suffix appears but Prefix does not.
        console.log("First Name: " + fname);
        console.log("Middle Name: " + mname);
        console.log("Last Name: " + lname);
        console.log("Suffix: " + suffName);
        console.log("");
    } else if (posStart != posEnd && posStart < posEnd) { // 3 names appear.
        console.log("First Name: " + fname);
        console.log("Middle Name: " + mname);
        console.log("Last Name: " + lname);
        console.log("");
    } else if (posStart >= 0 && posEnd >= 0) {
        console.log("First Name: " + fname);
        console.log("Last Name: " + lname);
        console.log("");
    } else {
        console.log("Only Name: " + lname);
        console.log("");
    }
}

parseAndDisplayName("Mrs.Oprah Jean Winfrey,Esquire")
parseAndDisplayName("Mrs.Oprah Jean Winfrey")
parseAndDisplayName("Oprah Jean Winfrey")
parseAndDisplayName("Oprah Winfrey")
parseAndDisplayName("Oprah")