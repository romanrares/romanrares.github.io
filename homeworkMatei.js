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


// level 15 ex.15

function isOlderThan(inventors, age) {
    return inventors.some(inventor => (inventor.passed - inventor.year) >= age);
}
isOlderThan(inventors, 19);
//---------------------------------------------------------------------------------

// level 15 ex.16
function isEveryoneOlderThan(inventors, age) {
    return inventors.every(inventor => (inventor.passed - inventor.year) >= age);
}
isEveryoneOlderThan(inventors, 19);
//---------------------------------------------------------------------------------

// level 15 ex.17
function findCommentById(comments, commentId) {
    return comm = comments.find(comment => commentId === comment.id).text;
}
findCommentById(comments, 823423);

//---------------------------------------------------------------------------------

// level 15 ex.18
function deleteCommentWithId(comments, commentId) {
    const indexForDelete = comments.findIndex(function (comment) {
        return commentId === comment.id
    });
    console.log("indexul este: ", indexForDelete); // should return: 1
    comments.splice(indexForDelete, 1);
    return comments;
}
deleteCommentWithId(comments, 823423);
//---------------------------------------------------------------------------------

// level 15 ex.19
const datas = ["car", "car", "truck", "truck", "bike", "walk", "car", "van", "bike", "walk", "car", "van", "car", "truck"];

function countWords(data) {
    var obj = {};
    data.forEach(d => obj[d] ? obj[d] = obj[d] + 1 : obj[d] = 1);
    return obj;
}

test(datas);

//-------------------------
// level 15 ex.19 --- reduce version  -------- FAILED (Cannot read property 'car' of undefined)
const arrays = ["car", "car", "truck", "truck", "bike", "walk", "car", "van", "bike", "walk", "car", "van", "car", "truck"];

function countWithReduce(arrays) {
   return arrays.reduce( (s1, s2) => {
        !s1[s2] ? s1[s2] = 1 : s1[s2]++;
        return s1;
    }, {});

}
countWithReduce(arrays);