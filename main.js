const spotlight = document.querySelector("#spotlight");
const gameContainer = document.querySelector("#game-container");
const npc = document.querySelector("#npc");
const score = document.querySelector("#counter");

// Create score
let gameScore = 0;
score.innerHTML = gameScore;



// connect mouse movements to #spotlight div and keep within #game-container
gameContainer.addEventListener("mousemove", (event) => { 
    const spotlightX = event.clientX;
    const spotlightY = event.clientY;
    spotlight.style.left = spotlightX + "px";
    spotlight.style.top = spotlightY + "px";
});

// MAKING THE NPC MOVE
const button = document.getElementById("button");

button.addEventListener("click", (event) => {
    const animate = () => {
        const left = Math.floor(Math.random() * 95);
        const top = Math.floor(Math.random() * 95);
        npc.style.left = `${left}%`;
        npc.style.top = `${top}%`;
    };

    setInterval(animate,5000);

});

// ON MOUSEOVER, NPC WILL APPEAR. Add one point to score
npc.addEventListener("mouseover", (event) => {
    npc.style.backgroundColor = "#fb2d7d";

    score.innerHTML = gameScore++;

//     const addScore = (gameScore) => {
//     score.value = 0;
//     score.value = gameScore++;
// }

});
// ON MOUSELEAVE IT WILL DISAPPEAR
npc.addEventListener("mouseleave", (event) => {
    npc.style.backgroundColor = "#0a1345";
})