var games = document.getElementsByClassName("button-effect")[0];
var shop = document.getElementsByClassName("button-effect")[1];
var community = document.getElementsByClassName("button-effect")[2];
var support = document.getElementsByClassName("button-effect")[3];
var account = document.getElementsByClassName("button-effect")[4];

var heade = document.getElementById("ideas");
var body = document.getElementById("body");
var heade1 = document.getElementsByClassName("games-now")[0];


var overlaydiv = document.getElementById("overlayall");

// Click buton itself and other
function isClicked0() {
    games.classList.toggle("clicked-button");
    body.classList.toggle("unscrollable");
    heade.classList.toggle("appear");
    heade1.classList.toggle("appear");
    
    if (document.getElementsByClassName("material-icons games")[0].innerHTML == "keyboard_arrow_down") {
        document.getElementsByClassName("material-icons games")[0].innerHTML = "keyboard_arrow_up";
    }
    else {
        document.getElementsByClassName("material-icons games")[0].innerHTML = "keyboard_arrow_down";
    }

    if (document.getElementsByClassName("material-icons shop")[0].innerHTML == "keyboard_arrow_up") {
        document.getElementsByClassName("material-icons shop")[0].innerHTML = "keyboard_arrow_down";
    }
    if (document.getElementsByClassName("material-icons community")[0].innerHTML == "keyboard_arrow_up") {
        document.getElementsByClassName("material-icons community")[0].innerHTML = "keyboard_arrow_down";
    }
    if (document.getElementsByClassName("material-icons support")[0].innerHTML == "keyboard_arrow_up") {
        document.getElementsByClassName("material-icons support")[0].innerHTML = "keyboard_arrow_down";
    }
    if (document.getElementsByClassName("material-icons account")[0].innerHTML == "keyboard_arrow_up") {
        document.getElementsByClassName("material-icons account")[0].innerHTML = "keyboard_arrow_down";
    }

    if (shop.classList.contains("clicked-button")) {
        shop.classList.remove("clicked-button");
    }
    if (community.classList.contains("clicked-button")) {
        community.classList.remove("clicked-button");
    }
    if (support.classList.contains("clicked-button")) {
        support.classList.remove("clicked-button");
    }
    if (account.classList.contains("clicked-button")) {
        account.classList.remove("clicked-button");
    }
}
function isClicked1() {
    shop.classList.toggle("clicked-button");

    if (document.getElementsByClassName("material-icons shop")[0].innerHTML == "keyboard_arrow_down") {
        document.getElementsByClassName("material-icons shop")[0].innerHTML = "keyboard_arrow_up";
    }
    else {
        document.getElementsByClassName("material-icons shop")[0].innerHTML = "keyboard_arrow_down";
    }

    if (document.getElementsByClassName("material-icons games")[0].innerHTML == "keyboard_arrow_up") {
        document.getElementsByClassName("material-icons games")[0].innerHTML = "keyboard_arrow_down";
    }
    if (document.getElementsByClassName("material-icons community")[0].innerHTML == "keyboard_arrow_up") {
        document.getElementsByClassName("material-icons community")[0].innerHTML = "keyboard_arrow_down";
    }
    if (document.getElementsByClassName("material-icons support")[0].innerHTML == "keyboard_arrow_up") {
        document.getElementsByClassName("material-icons support")[0].innerHTML = "keyboard_arrow_down";
    }
    if (document.getElementsByClassName("material-icons account")[0].innerHTML == "keyboard_arrow_up") {
        document.getElementsByClassName("material-icons account")[0].innerHTML = "keyboard_arrow_down";
    }

    if (games.classList.contains("clicked-button")) {
        games.classList.remove("clicked-button");
    }
    if (community.classList.contains("clicked-button")) {
        community.classList.remove("clicked-button");
    }
    if (support.classList.contains("clicked-button")) {
        support.classList.remove("clicked-button");
    }
    if (account.classList.contains("clicked-button")) {
        account.classList.remove("clicked-button");
    }
}
function isClicked2() {
    community.classList.toggle("clicked-button");

    if (document.getElementsByClassName("material-icons community")[0].innerHTML == "keyboard_arrow_down") {
        document.getElementsByClassName("material-icons community")[0].innerHTML = "keyboard_arrow_up";
    }
    else {
        document.getElementsByClassName("material-icons community")[0].innerHTML = "keyboard_arrow_down";
    }

    if (document.getElementsByClassName("material-icons games")[0].innerHTML == "keyboard_arrow_up") {
        document.getElementsByClassName("material-icons games")[0].innerHTML = "keyboard_arrow_down";
    }
    if (document.getElementsByClassName("material-icons shop")[0].innerHTML == "keyboard_arrow_up") {
        document.getElementsByClassName("material-icons shop")[0].innerHTML = "keyboard_arrow_down";
    }
    if (document.getElementsByClassName("material-icons support")[0].innerHTML == "keyboard_arrow_up") {
        document.getElementsByClassName("material-icons support")[0].innerHTML = "keyboard_arrow_down";
    }
    if (document.getElementsByClassName("material-icons account")[0].innerHTML == "keyboard_arrow_up") {
        document.getElementsByClassName("material-icons account")[0].innerHTML = "keyboard_arrow_down";
    }

    if (shop.classList.contains("clicked-button")) {
        shop.classList.remove("clicked-button");
    }
    if (support.classList.contains("clicked-button")) {
        support.classList.remove("clicked-button");
    }
    if (games.classList.contains("clicked-button")) {
        games.classList.remove("clicked-button");
    }
    if (account.classList.contains("clicked-button")) {
        account.classList.remove("clicked-button");
    }   
}
function isClicked3() {
    support.classList.toggle("clicked-button");

    if (document.getElementsByClassName("material-icons support")[0].innerHTML == "keyboard_arrow_down") {
        document.getElementsByClassName("material-icons support")[0].innerHTML = "keyboard_arrow_up";
    }
    else {
        document.getElementsByClassName("material-icons support")[0].innerHTML = "keyboard_arrow_down";
    }

    if (document.getElementsByClassName("material-icons games")[0].innerHTML == "keyboard_arrow_up") {
        document.getElementsByClassName("material-icons games")[0].innerHTML = "keyboard_arrow_down";
    }
    if (document.getElementsByClassName("material-icons shop")[0].innerHTML == "keyboard_arrow_up") {
        document.getElementsByClassName("material-icons shop")[0].innerHTML = "keyboard_arrow_down";
    }
    if (document.getElementsByClassName("material-icons community")[0].innerHTML == "keyboard_arrow_up") {
        document.getElementsByClassName("material-icons community")[0].innerHTML = "keyboard_arrow_down";
    }
    if (document.getElementsByClassName("material-icons account")[0].innerHTML == "keyboard_arrow_up") {
        document.getElementsByClassName("material-icons account")[0].innerHTML = "keyboard_arrow_down";
    }

    if (shop.classList.contains("clicked-button")) {
        shop.classList.remove("clicked-button");
    }
    if (community.classList.contains("clicked-button")) {
        community.classList.remove("clicked-button");
    }
    if (games.classList.contains("clicked-button")) {
        games.classList.remove("clicked-button");
    }
    if (account.classList.contains("clicked-button")) {
        account.classList.remove("clicked-button");
    } 
}
function isClicked4() {
    account.classList.toggle("clicked-button");
    if (document.getElementsByClassName("material-icons account")[0].innerHTML == "keyboard_arrow_down") {
        document.getElementsByClassName("material-icons account")[0].innerHTML = "keyboard_arrow_up";
    }
    else {
        document.getElementsByClassName("material-icons account")[0].innerHTML = "keyboard_arrow_down";
    }
    

    if (document.getElementsByClassName("material-icons games")[0].innerHTML == "keyboard_arrow_up") {
        document.getElementsByClassName("material-icons games")[0].innerHTML = "keyboard_arrow_down";
    }
    if (document.getElementsByClassName("material-icons shop")[0].innerHTML == "keyboard_arrow_up") {
        document.getElementsByClassName("material-icons shop")[0].innerHTML = "keyboard_arrow_down";
    }
    if (document.getElementsByClassName("material-icons community")[0].innerHTML == "keyboard_arrow_up") {
        document.getElementsByClassName("material-icons community")[0].innerHTML = "keyboard_arrow_down";
    }
    if (document.getElementsByClassName("material-icons support")[0].innerHTML == "keyboard_arrow_up") {
        document.getElementsByClassName("material-icons support")[0].innerHTML = "keyboard_arrow_down";
    }

    if (shop.classList.contains("clicked-button")) {
        shop.classList.remove("clicked-button");
    }
    if (community.classList.contains("clicked-button")) {
        community.classList.remove("clicked-button");
    }
    if (games.classList.contains("clicked-button")) {
        games.classList.remove("clicked-button");
    }
    if (support.classList.contains("clicked-button")) {
        support.classList.remove("clicked-button");
    } 
}

// Click ouside button
document.addEventListener("DOMContentLoaded", function() {
    const clickable = document.getElementsByClassName("button-effect")[0];
    const appearable = document.getElementById("ideas");
    const unscroll = document.getElementById("body");
    const black_over = document.getElementById("overlayall");

    clickable.addEventListener("click", function(event) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ a
        this.classList.add('clicked-button');
        
    });

    
    document.addEventListener('click', function(event) {
        if ((!clickable.contains(event.target)) && (!appearable.contains(event.target))) {
            clickable.classList.remove('clicked-button');
            document.getElementsByClassName("material-icons games")[0].innerHTML = "keyboard_arrow_down";
            appearable.classList.remove('appear');
            unscroll.classList.remove("unscrollable");
            black_over.classList.remove("overlay");
        }
        // impact on part outside tag (! is inverted)
    });

});

document.addEventListener("DOMContentLoaded", function() {
    const clickable = document.getElementsByClassName("button-effect")[1];

    clickable.addEventListener("click", function(event) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ a
        this.classList.add('clicked-button');
    });

    document.addEventListener('click', function(event) {
        if (!clickable.contains(event.target)) {
            clickable.classList.remove('clicked-button');
            document.getElementsByClassName("material-icons shop")[0].innerHTML = "keyboard_arrow_down";
        }
        // impact on part outside tag (! is inverted)
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const clickable = document.getElementsByClassName("button-effect")[2];

    clickable.addEventListener("click", function(event) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ a
        this.classList.add('clicked-button');
    });

    document.addEventListener('click', function(event) {
        if (!clickable.contains(event.target)) {
            clickable.classList.remove('clicked-button');
            document.getElementsByClassName("material-icons community")[0].innerHTML = "keyboard_arrow_down";
        }
        // impact on part outside tag (! is inverted)
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const clickable = document.getElementsByClassName("button-effect")[3];

    clickable.addEventListener("click", function(event) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ a
        this.classList.add('clicked-button');
    });

    document.addEventListener('click', function(event) {
        if (!clickable.contains(event.target)) {
            clickable.classList.remove('clicked-button');
            document.getElementsByClassName("material-icons support")[0].innerHTML = "keyboard_arrow_down";
        }
        // impact on part outside tag (! is inverted)
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const clickable = document.getElementsByClassName("button-effect")[4];

    clickable.addEventListener("click", function(event) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ a
        this.classList.add('clicked-button');
    });

    document.addEventListener('click', function(event) {
        if (!clickable.contains(event.target)) {
            clickable.classList.remove('clicked-button');
            document.getElementsByClassName("material-icons account")[0].innerHTML = "keyboard_arrow_down";
        }
        // impact on part outside tag (! is inverted)
    });
});

// over black background


// Black overlay
function Overlay() {
    overlaydiv.classList.toggle("overlay");
}