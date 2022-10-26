// Stretch Goals Completed

// ** WARMUP CHALLENGES

// 1. Change the span with the class mess-with-me to have a font size of 40px.
let spanMessWithMe = document.querySelector('span.mess-with-me');

spanMessWithMe.style.fontSize = "40px";


// 2. Change the paragraph with the class mess-with-me to have a background color of green.
let pMessWithMe = document.querySelector('p.mess-with-me');

pMessWithMe.style.background = "green";


// 3. Hide the second dinosaur's image so that it's no longer visible, and so that the area below it moves up to take the space.
let secondDino = document.querySelector('#hide-me');

secondDino.style.display = "none";


// 4. Change the first dinosaur image so that the image's dimensions are 324 pixels wide.
let firstDino = document.querySelector('#triceratops');
firstDino.style.width = "324px";



// ** EVENT LISTENER CHALLENGES

// 1. Add an event listener to the span with the class mess-with-me so that when it is clicked, the font color changes to orange.
spanMessWithMe.addEventListener('click', function () {
    spanMessWithMe.style.color = "orange";
});

// 2. Add an event listener to the first dinosaur so that when they are clicked, they receive a red border.

firstDino.addEventListener('click', function () {
    firstDino.style.border = "2px solid red";
});

// 3. Add an event listener to the feathered dinosaur, so that when they are clicked, they become 50% transparent.
let feathers = document.querySelector('#feathers');

feathers.addEventListener('click', function () {
    feathers.style.opacity = ".5"
});


// 4. Add an event listener to the "Switch Background Color" button so that when it is clicked, we switch the background color of the row of dinosaurs to a color of your choice.
// PLUS Stretch Goal 1: Make it so that when you click the "Switch Background Color" button, you switch it back and forth from white to whatever color you chose.
let bgToggleButton = document.querySelector('#toggle');
let dinoRow = document.querySelector('#row');

bgToggleButton.addEventListener('click', function () {

    if (dinoRow.style.background === "") {
        dinoRow.style.background = "hotpink";

    } else {
        dinoRow.style.background = "";
    }
});


// 5. Add an event listener to the dinosaur with the id biggify that, when HOVERED, grows the image to 200 pixels wide.
let big = document.querySelector('#biggify')

big.addEventListener('mouseenter', function () {
    big.style.width = "200px";
});

// Stretch Goal 2.: Add a new event listener so that when the biggify dinosaur is no longer hovered, they change back to their original size. 
big.addEventListener('mouseleave', function () {
    big.style.width = "";
});