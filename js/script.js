const mario = document.querySelector(".super-mario");
const pipe = document.querySelector(".pipe-game");
const game = document.querySelector(".game");
const restart = document.querySelector(".restart");


const jump = () => {
    mario.classList.add("jump-mario");

    setTimeout(() => {
        mario.classList.remove("jump-mario");
    }, 500);
};

const loopGame = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window
        .getComputedStyle(mario)
        .bottom.replace("px", "");

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "./images/mario-game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "45px";
    game.style.background = "linear-gradient(#191919, #FA5E0A)";

    restart.style.display = "block";

    clearInterval(loopGame)

    }

}, 10);

function restartGame(){
    onclick = document.location.reload(true);
}

document.addEventListener("keydown", jump);