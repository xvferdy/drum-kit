function makeSound(key) {

    switch (key) {
        case "v":
            var snare = new Audio("sounds/Snare 5.wav");
            snare.play();
            break;
        case "b":
            var kick = new Audio("sounds/Kick 4.wav");
            kick.play();
            break;
        case "n":
            var bass = new Audio("sounds/Bass 6 (C).wav");
            bass.play();
            break;
        case "m":
            var i808 = new Audio("sounds/808 1 (C).wav");
            i808.play();
            break;
        case "j":
            var chant = new Audio("sounds/Chant 5.wav");
            chant.play();
            break;
        case "k":
            var fx = new Audio("sounds/FX 5.wav");
            fx.play();
            break;
        case "l":
            var perc = new Audio("sounds/Perc 3.wav");
            perc.play();
            break;
        case "u":
            var hat = new Audio("sounds/Hat 16.wav");
            hat.play();
            break;
        case "i":
            var clap = new Audio("sounds/Clap 14.wav");
            clap.play();
            break;
        case "o":
            var ride = new Audio("sounds/Ride.wav");
            ride.play();
            break;
        case "p":
            var open = new Audio("sounds/Open Hat 5.wav");
            open.play();
            break;

        default:
            console.log(this);
    }

}

//make var
var button = document.querySelectorAll("button");
var buttonList = document.querySelectorAll("button").length

//run event "click" on mouse
for (i = 0; i < buttonList; i++) {
    button[i].addEventListener("click", function () {
        var buttonClass = this.className;
        makeSound(buttonClass);
        buttonAnimation(buttonClass);
    });
}


//untuk animasi flash
function buttonAnimation(event) {
    var activeButton = document.querySelector("." + event);
    activeButton.classList.add('playing');
    setTimeout(function () {
        activeButton.classList.remove('playing');
    }, 100);
}