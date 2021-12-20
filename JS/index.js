const musicSound = new Audio("./assets/food.mp3");
const foodSound = new Audio("./assets/food.mp3");
const moveSound = new Audio("./assets/move.mp3");
const gameOverSound = new Audio("./assets/gameover.mp3");

let direction = {x: 0, y:0};


function main(ctime){
    console.log(ctime);
    window.requestAnimationFrame(main);
}

window.requestAnimationFrame(main);