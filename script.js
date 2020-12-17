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

// function showContent() {
//     const x = document.getElementById("section");
//     if (x.classList.contains("section-style")) {
//         x.classList.add(" desktop");
//     } else {
//         x.className = "section-style"
//     }
// }

// function showContent() {
//     let x = document.querySelectorAll('.section-style');
//     for (let i = 0; i < x.length; i++) {
//         x[i].classList.add('desktop');
//     }
// }

function showTherapy1() {
    const x = document.querySelector('.therapy1');
    x.classList.toggle('desktop');
}

function showTherapy2() {
    const x = document.querySelector('.therapy2');
    x.classList.toggle('desktop');
}

function showAbout() {
    const x = document.querySelector('.about');
    x.classList.toggle('desktop');
}


document.getElementById("sticky").addEventListener("click", hideSticky);

function hideSticky() {
    document.getElementById("sticky").style.display = "none";
}

document.addEventListener("scroll", showSticky);

function showSticky() {
    document.getElementById("sticky").style.display = "block";
}




