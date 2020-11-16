function hide(id) {
    var el = document.getElementById(id);

    if(el) {
        el.style.display = "none";
    } else {
        console.warn("pagina nu exista");
    }
}


function hideAllPages() {
    var pages = document.querySelectorAll(".page");
    for (var i = 0; i < pages.length; i++) {
        var page = pages[i];
        var id = page.id;
        hide(id);
    }
}

/* function show(id) {
    var el = document.getElementById(id);

    if (el) {
        el.style.display = "";
    } else {
        console.warn("pagina nu exista");
    }
} */


function showSelectedPage() {
    // o varianta, sa iterez prin toate #top-menu-bar li a, iar pentru fiecare a sa adaug un event listener "onClick"

    var menuBarItems = document.querySelectorAll("#top-menu-bar li a");
    for (var i = 0; i < menuBarItems.length; i++) {
        menuBarItems[i].addEventListener('click', function (e) {
            console.log("S-a dat click pe: ", e.target);
            var target = e.target;
            var currentId = target.innerText.toLowerCase();
            document.getElementById(currentId).style.display = '';
        }, false);
    }

    // o alta varianta: asta merge cel mai bine dar am ERORI in consola la click in alta parte (pentru ca: unde dau eu click 
    // -> elementul nu are id, iar style nu poate fi aplicat pe ceva inexistent

    // document.addEventListener('click', function (e) {
    //     var target = e.target;
    //     var currentId = target.innerText.toLowerCase();
    //     document.getElementById(currentId).style.display = '';
    // }, false);
}

function showHome() {
    hideAllPages();
    showSelectedPage();
}

function showSkills() {
    hideAllPages();
    showSelectedPage();

    // document.getElementById('skils-id').style.backgroundColor = '#fff';
    // document.getElementById('skils-id').style.color = 'red';
}

function showProjects() {
    hideAllPages();
    showSelectedPage();
}

function showLanguages() {
    hideAllPages();
    showSelectedPage();
}