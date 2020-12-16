// level 10: ex.2
function collectFirstName(employees) {
    if (!employees) {
        console.info("Nu ai dat datele corect");
    }
    var firstName = employees.map(employee => employee.firstName);
    return firstName;
}
collectFirstName(employees);

/* level 10: ex.3 */
function calculateAverageSalary(employees) {
    let sum = 0;
    employees.forEach(employee => sum += parseFloat(employee.salary));
    return (sum / employees.length).toFixed(2);
}

const average = calculateAverageSalary(employees);
console.log("average", average);

/* level 10: ex.4 */
function splitEmployees() {

    // <varianta 1>
    let maleArray = [];
    let femaleArray = [];

    employees.filter(employee =>
        employee.gender == "Male" ? maleArray.push(employee.firstName)
            :
            femaleArray.push(employee.firstName)
    );;

    // </varianta 1> 


    // <varianta 2>
    /*
        const maleArray = employees.filter(employee => employee.gender == "Male");
        const femaleArray = employees.filter(employee => employee.gender == "Female");
    */

    // </varianta 2>


    return [maleArray, femaleArray];

}
splitEmployees(employees);

// level 15: ex.5
function transformToObject(employees) {
    const objectResult = {};
    employees.forEach(employee => {
        objectResult[employee.lastName] = employee;
    });
    console.log("rezultat", objectResult);
    return objectResult;
}

transformToObject(employees);

