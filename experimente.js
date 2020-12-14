// let activePage = "skills";

// function hide(id) {
//     const el = document.getElementById(id);
//     if (el) {
//         el.style.display = "none";
//     } else {
//         console.error("elementul nu exista");
//     }
// }

// function hidePreviousPage() {
//     hide(activePage);
//     const link = document.querySelector(`#top-menu-bar a[data-page="${activePage}"]`);
//     link.classList.remove("active");
// }

// function showPage(pageId) {
//     hidePreviousPage();
//     document.getElementById(pageId).style.display = "";
//     const link = document.querySelector(`#top-menu-bar a[data-page="${pageId}"]`);
//     link.classList.add("active");
//     activePage = pageId;
// }

// function initMenu() {
//     document.addEventListener("click", e => {
//         const link = e.target;
//         if (link.matches("#top-menu-bar a")) {
//             const id = link.getAttribute("data-page");
//             showPage(id);
//         }
//     });
// }

// function getHtmlSkills(skills) {
//     return skills.map(skill =>
//         `<li class= "${skill.endorsements > 9 ? "favorite" : ""}">
//          ${skill.name} <span>&middot; ${skill.endorsements}</span>
//          </li>`
//     ).join("");
// }

// function showSkills(skills) {
//     const ul = document.querySelector("#skills ul");
//     ul.innerHTML = getHtmlSkills(skills);
// }

// initMenu();

// showPage(activePage);

// fetch("data/skills.json")
//     .then(r => r.json())
//     .then((allSkills) => {
//         allSkills.sort((s1, s2) => s2.endorsements - s1.endorsements);
//         showSkills(allSkills);
//     });


// level 10: ex.2
function collectFirstName(employees) {
    if (!employees) {
        console.info("Nu ai dat datele corect");
    }
    var firstName = employees.map(employee => employee.firstName);
    return firstName;
}

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

