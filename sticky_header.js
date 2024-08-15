window.onscroll = function() {myFunction()};

var header = document.getElementById("fixed");
var sticky = header.offsetTop;
var content = document.getElementById("content");


// Fixed header
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        content.classList.add("fixed-head");
    }
    else {
        header.classList.remove("sticky");
        content.classList.remove("fixed-head");
    }
}