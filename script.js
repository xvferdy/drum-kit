//variabel untuk menentukan document object
var button = document.querySelectorAll("button");
var buttonList = document.querySelectorAll("button").length

//untuk membuat suara
function makeSound(key) {
    switch (key) {
        case "v":
            const snare = new Audio("sounds/Snare 5.wav");
            snare.play();
            break;
        case "b":
            const kick = new Audio("sounds/Kick 4.mp3");
            kick.play();
            break;
        case "n":
            const bass = new Audio("sounds/Bass 6 (C).mp3");
            bass.play();
            break;
        case "m":
            const i808 = new Audio("sounds/808 1 (C).mp3");
            i808.play();
            break;
        case "j":
            const chant = new Audio("sounds/Chant 5.mp3");
            chant.play();
            break;
        case "k":
            const fx = new Audio("sounds/FX 5.mp3");
            fx.play();
            break;
        case "l":
            const perc = new Audio("sounds/Perc 3.mp3");
            perc.play();
            break;
        case "u":
            const hat = new Audio("sounds/Hat 16.mp3");
            hat.play();
            break;
        case "i":
            const clap = new Audio("sounds/Clap 14.mp3");
            clap.play();
            break;
        case "o":
            const ride = new Audio("sounds/Ride.mp3");
            ride.play();
            break;
        case "p":
            const open = new Audio("sounds/Open Hat 5.mp3");
            open.play();
            break;

        default:
            console.log(this);
    }
}

//untuk animasi flash pada tombol
function buttonAnimation(event) {
    var activeButton = document.querySelector("." + event);
    activeButton.classList.add('playing');
    setTimeout(function () {
        activeButton.classList.remove('playing');
    }, 100);
}

//event untuk masing2 tombol dikilik
for (i = 0; i < buttonList; i++) {
    button[i].addEventListener("click", function () {
        var buttonClass = this.className;
        makeSound(buttonClass);
        buttonAnimation(buttonClass);
    });
}

//event untuk masing2 tombol ditekan
//event object
document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
})