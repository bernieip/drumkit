// select all items that has a class of "drum"
let numberOfDrumButtons = document.querySelectorAll(".drum").length

// assign each drum a eventListener, which when clicked calls the function makeSound
for (let i = 0; i<numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        let buttonInnerHtml = this.innerHTML;

        makeSound(buttonInnerHtml);

        buttonAnimation(buttonInnerHtml);

    });
}

// detect keyboard press
document.addEventListener("keydown", function(event) {
    makeSound(event.key);

    buttonAnimation(event.key);
});

// create a function called makeSound and assign each letter a different sound file
function makeSound(key) {
// if button pressed is W, then play tom-1.mp3 and break, if not continue to next case
    switch (key) {
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default:
    };
}

// select current key and add the "pressed" css class to it
function buttonAnimation(currentKey) {
    let activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

// after 100 milliseconds, remove the "pressed" css class, to create a blink effect for each key press
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
};