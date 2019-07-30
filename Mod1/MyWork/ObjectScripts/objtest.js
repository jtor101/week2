function printEmployeeAndPay(emp) {
    console.log("Name: " + emp.name);
    console.log("Name: " + emp.payRate);
}

function createEmployee(id, name, jobTitle, payRate) {
    let emp = {
        employeeId: id,
        name: name,
        jobTitle: jobTitle,
        payRate: payRate
    };
    return emp;
}

let emp1 = {
    employeeId: "1",
    name: "Ezra",
    jobTitle: "Web Designer",
    payRate: 45.75
};

let emp2 = {
    employeeId: "2",
    name: "Elisha",
    jobTitle: "Game Programmer",
    payRate: 72.95
};

let emp3 = createEmployee("3", "Bill", "Analyst", "65.00");

printEmployeeAndPay(emp1);
printEmployeeAndPay(emp2);
printEmployeeAndPay(emp3);