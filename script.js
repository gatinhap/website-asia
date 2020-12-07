function showNav() {
    const x = document.getElementById("hero");
    if (x.className === "hero") {
        x.className += " responsive";
    } else {
        x.className = "hero";
    }

    // const y = document.getElementById("wrapper");
    // if (y.className === "wrapper") {
    //     y.className += " responsive";
    // } else {
    //     y.className = "wrapper";
    // }
}

function hideNav() {
    const element = document.getElementById("hero");
    element.classList.remove("responsive");

    // const background = document.getElementById("wrapper");
    // background.classList.remove("responsive");
}