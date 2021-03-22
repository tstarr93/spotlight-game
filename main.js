const spotlight = document.getElementById("spotlight");

// connect mouse movements to #spotlight div
document.addEventListener("mousemove", function(event) { 
    let x = event.clientX;
    let y = event.clientY;
    spotlight.style.left = x + "px";
    spotlight.style.top = y + "px";
});

// use getBoundingClientRect to determine the space within #game-container

const gameContainer = document.getElementById("game-container");

// const gameContainerRect = gameContainer.getBoundingClientRect();
// let x = gameContainerRect.left;
// let y = gameContainerRect.top;
// let w = gameContainerRect.right;
// let h = gameContainerRect.bottom;


// using this data about its space, create a function that tells #spotlight div to stop following the mouse once the mouse leaves #game-container

// if #spotlight is outside #game-container (stop mousemove event)
// OR: if #spotlight is inside gameContainerRect, then (run mousemove eventListener)

// DETECTING WHETHER MOUSE IS INSIDE GAME CONTAINER OR NOT
gameContainer.addEventListener("mouseenter", function(event) {
    isInContainer = true;
});
gameContainer.addEventListener("mouseout", function(event) {
    isInContainer = false;
});

if (isInContainer === true) {
    document.addEventListener("mousemove", function(event) { 
        let x = event.clientX;
        let y = event.clientY;
        spotlight.style.left = x + "px";
        spotlight.style.top = y + "px";
    }) 
} else {
    spotlight != mousemove;
};
