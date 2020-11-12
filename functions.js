function hide(id) {
    var el = document.getElementById(id);
    console.info("hide:" + id, el);

    if(el) {
        el.style.display = "none";
    } else {
        console.warn("pagina nu exista");
    }
}

function hideAllPages() {
    hide("home");
    hide("skills");
    hide("projects");
    hide("languages");
}

function showHome() {
    hideAllPages();
    document.getElementById("home").style.display = "";
}

function showSkills() {
    hideAllPages();
    document.getElementById('skills').style.display = '';
    // document.getElementById('skils-id').style.backgroundColor= '#fff';
    // document.getElementById('skils-id').style.color= 'red';
}

function showProjects() {
    hideAllPages();
    document.getElementById("projects").style.display = "";
}

function showLanguages() {
    hideAllPages();
    document.getElementById("languages").style.display = "";
}