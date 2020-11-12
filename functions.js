const { addListener } = require("process");

function hide(id) {
    var el = document.getElementById(id);
    console.info("hide:" + id, el);

    if(el) {
        el.style.display = "none";
    } else {
        console.warn("pagina nu exista");
    }
}

// var i;
// var a = [
//     document.getElementById("top-menu-bar").getElementsByTagName("li")
// ];
// for (i = 0; i < a.length; i++) {
//     console.log(a[i]);
// }




function showHome() {
    hide("skills");
    hide("projects");
    hide("languages");
    document.getElementById("home").style.display = "";
}

function showSkills() {
    hide("projects");
    hide("languages");
    hide("home");
    document.getElementById('skills').style.display = '';
    // document.getElementById('skils-id').style.backgroundColor= '#fff';
    // document.getElementById('skils-id').style.color= 'red';
}

function showProjects() {
    document.getElementById("skills").style.display = "none";
    document.getElementById("languages").style.display = "none";
    document.getElementById("home").style.display = "none";
    document.getElementById("projects").style.display = "";
}

function showLanguages() {
    document.getElementById("projects").style.display = "none";
    document.getElementById("skills").style.display = "none";
    document.getElementById("home").style.display = "none";
    document.getElementById("languages").style.display = "";
}