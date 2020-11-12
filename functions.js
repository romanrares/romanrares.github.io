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
    hide("skills");
    hide("languages");
    hide("home");
    document.getElementById("projects").style.display = "";
}

function showLanguages() {
    hide("projects");
    hide("skills");
    hide("home");
    document.getElementById("languages").style.display = "";
}