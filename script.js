function displayCookieMsg() {
    document.getElementById('cc-container').style.opacity = '1';
}

const showCookie = window.addEventListener('DOMContentLoaded', displayCookieMsg);

function hideCookieMsg() {
    document.getElementById('cc-container').style.display = 'none';
}

const hideCookie = document.getElementById('agree').addEventListener("click", hideCookieMsg);

function showNav() {
    const x = document.getElementById("hero");
    if (x.className === "hero") {
        x.className += " responsive";
    } else {
        x.className = "hero";
    }
}

function hideNav() {
    const element = document.getElementById("hero");
    element.classList.remove("responsive");
}

const menuItems = document.querySelectorAll(".nav__desktop-view a");

menuItems.forEach(function (menuItem) {
    menuItem.addEventListener("click", hideNav);
});

const exitMenu = document.querySelector('.nav-menu-exit');

exitMenu.addEventListener("click", hideNav);


function showArrow() {
    if (window.pageYOffset >= 200) {
        document.getElementById("sticky").style.display = "block";
    } else document.getElementById("sticky").style.display = "none";
}

document.addEventListener("scroll", showArrow);

function showSection(sectionName) {
    let classToShow = sectionName.parentNode.className.split(" ")[0];
    const x = document.querySelector('.'+classToShow);
    x.classList.add('desktop');
}

function hideSection(sectionName) {
    let classToShow = sectionName.parentNode.className.split(" ")[0];
    const x = document.querySelector('.'+classToShow);
    x.classList.remove('desktop');
}