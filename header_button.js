var games1 = document.getElementsByClassName("button-games")[0];
var games2 = document.getElementsByClassName("button-games")[1];
var games3 = document.getElementsByClassName("button-games")[2];
var games4 = document.getElementsByClassName("button-games")[3];

var gamesimg1 = document.getElementsByClassName("hide-games")[0]
var gamesimg2 = document.getElementsByClassName("hide-games")[1]
var gamesimg3 = document.getElementsByClassName("hide-games")[2]
var gamesimg4 = document.getElementsByClassName("hide-games")[3]

var gamesmenu1 = document.getElementsByClassName("menu-games")[0]
var gamesmenu2 = document.getElementsByClassName("menu-games")[1]
var gamesmenu3 = document.getElementsByClassName("menu-games")[2]
var gamesmenu4 = document.getElementsByClassName("menu-games")[3]

// changing games buttons
function gamesChoice1() {
    // button effect
    games1.classList.add("chose");

    games2.classList.remove("chose");
    games3.classList.remove("chose");
    games4.classList.remove("chose");

    // images
    gamesimg1.classList.add("appear");

    gamesimg2.classList.remove("appear");
    gamesimg3.classList.remove("appear");
    gamesimg4.classList.remove("appear");

    // menu
    gamesmenu1.classList.add("appear");

    gamesmenu2.classList.remove("appear");
    gamesmenu3.classList.remove("appear");
    gamesmenu4.classList.remove("appear");
}
function gamesChoice2() {
    // button effect
    games2.classList.add("chose");

    games1.classList.remove("chose");
    games3.classList.remove("chose");
    games4.classList.remove("chose");

    // images
    gamesimg2.classList.add("appear");

    gamesimg1.classList.remove("appear");
    gamesimg3.classList.remove("appear");
    gamesimg4.classList.remove("appear");

    // menu
    gamesmenu2.classList.add("appear");

    gamesmenu1.classList.remove("appear");
    gamesmenu3.classList.remove("appear");
    gamesmenu4.classList.remove("appear");
}
function gamesChoice3() {
    // button effect
    games3.classList.add("chose");

    games1.classList.remove("chose");
    games2.classList.remove("chose");
    games4.classList.remove("chose");

    // images
    gamesimg3.classList.add("appear");

    gamesimg1.classList.remove("appear");
    gamesimg2.classList.remove("appear");
    gamesimg4.classList.remove("appear");

    // menu
    gamesmenu3.classList.add("appear");

    gamesmenu1.classList.remove("appear");
    gamesmenu2.classList.remove("appear");
    gamesmenu4.classList.remove("appear");
}
function gamesChoice4() {
    // button effect
    games4.classList.add("chose");

    games1.classList.remove("chose");
    games2.classList.remove("chose");
    games3.classList.remove("chose");

    // images
    gamesimg4.classList.add("appear");

    gamesimg1.classList.remove("appear");
    gamesimg2.classList.remove("appear");
    gamesimg3.classList.remove("appear");

    // menu
    gamesmenu4.classList.add("appear");

    gamesmenu1.classList.remove("appear");
    gamesmenu2.classList.remove("appear");
    gamesmenu3.classList.remove("appear");
}