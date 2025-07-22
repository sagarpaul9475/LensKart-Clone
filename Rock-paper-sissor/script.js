let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissors = document.querySelector('.scissors');

let win1 = document.getElementById('win');
let loss1 = document.getElementById('loss');
let tie1 = document.getElementById('tie');

let res = document.getElementById('res');

let player = document.getElementById('img-player');
let comp = document.getElementById('img-comp');

let reset=document.getElementById('btn');

let win = 0;
let losses = 0;
let tie = 0;

let action = document.getElementById('action');

action.style.visibility = 'hidden';

rock.addEventListener('click', () => playGame('rock'));
paper.addEventListener('click', () => playGame('paper'));
scissors.addEventListener('click', () => playGame('scissors'));

function gameReset() {
    
    win = 0;
    losses = 0;
    tie = 0;

    win1.textContent = win;
    loss1.textContent = losses;
    tie1.textContent = tie;

    res.textContent = "Game";

}

reset.addEventListener('click',()=>{
    gameReset();
})

function ComputerMove() {
    let move = Math.random();
    if (move < 1/3) return 'rock';
    if (move < 2/3) return 'paper';
    return 'scissors';
}

function playGame(playerChoice) {

    action.style.visibility = 'visible';

    const computerChoice = ComputerMove();


    player.src = `assets/${playerChoice}-emoji.png`;
    comp.src = `assets/${computerChoice}-emoji.png`;

    if (computerChoice === playerChoice) {
        tie++;
        tie1.textContent = tie;
        res.textContent = "It's a Tie";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        win++;
        win1.textContent = win;
        res.textContent = "You Win!";
    } else {
        losses++;
        loss1.textContent = losses;
        res.textContent = "You Lose!";
    }
}
