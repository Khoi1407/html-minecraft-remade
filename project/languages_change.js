const language = document.querySelector("#language");
var arrow = document.getElementsByClassName("material-icons keyboard")[0];

function toggleTransi() {
    language.classList.toggle("transi");
    if (arrow.innerHTML == "keyboard_arrow_up") {
        arrow.innerHTML = "keyboard_arrow_down";
    }
    else {
        arrow.innerHTML = "keyboard_arrow_up";
    }
}