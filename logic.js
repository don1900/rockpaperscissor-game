const Yrock = document.querySelector('.rock')
const Ypaper = document.querySelector('.paper')
const Yscissor = document.querySelector('.scissor')
const answerbox = document.querySelector('.choosen')
var Yperson=""
computer = ["rock","paper","scissor"]

var zoop=""

Yrock.addEventListener("click",()=>{
    Yperson="rock"
    var Ycomputer = computer[Math.floor(Math.random()*computer.length)]
    if(Yperson=="rock" && Ycomputer=="scissor"){
        zoop="Congratulations You Won";
    }
    else if(Yperson=="rock" && Ycomputer=="paper"){
        zoop="You Lost Better Luck Next Time";
    }
    else if(Yperson=="rock" && Ycomputer=="rock"){
        zoop="Its Tie Play Again";
    }
    answerbox.innerHTML=`You Choosed ${Yperson} And The Computer Choosed ${Ycomputer} So `;
    setTimeout(()=>{answerbox.innerHTML=`You Choosed ${Yperson} And The Computer Choosed ${Ycomputer} So ${zoop}`},1000)
});
Ypaper.addEventListener("click",()=>{
    Yperson="paper"
    var Ycomputer = computer[Math.floor(Math.random()*computer.length)]
    if(Yperson=="paper" && Ycomputer=="rock"){
        zoop="Congratulations You Won";
    }
    else if(Yperson=="paper" && Ycomputer=="scissor"){
        zoop="You Lost Better Luck Next Time";
    }
    else if(Yperson=="paper" && Ycomputer=="paper"){
        zoop="Its Tie Play Again";
    }
    answerbox.innerHTML=`You Choosed ${Yperson} And The Computer Choosed ${Ycomputer} So `;
    setTimeout(()=>{answerbox.innerHTML=`You Choosed ${Yperson} And The Computer Choosed ${Ycomputer} So ${zoop}`},1000)
});
Yscissor.addEventListener("click",()=>{
    Yperson="scissor"
    var Ycomputer = computer[Math.floor(Math.random()*computer.length)]
    if(Yperson=="scissor" && Ycomputer=="paper"){
        zoop="Congratulations You Won";
    }
    else if(Yperson=="scissor" && Ycomputer=="rock"){
        zoop="You Lost Better Luck Next Time";
    }
    else if(Yperson=="paper" && Ycomputer=="paper"){
        zoop="Its Tie Play Again";
    }
    answerbox.innerHTML=`You Choosed ${Yperson} And The Computer Choosed ${Ycomputer} So `;
    setTimeout(()=>{answerbox.innerHTML=`You Choosed ${Yperson} And The Computer Choosed ${Ycomputer} So ${zoop}`},1000)
});

let userScore = 0;
let computerScore = 0;

document.getElementById('rock').addEventListener('click', () => playGame('rock'));
document.getElementById('paper').addEventListener('click', () => playGame('paper'));
document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));

function playGame(userChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);
    updateScore(result);
    displayResult(result, userChoice, computerChoice);
    animateChoices(userChoice, computerChoice);
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(user, computer) {
    if (user === computer) {
        return 'tie';
    } else if (
        (user === 'rock' && computer === 'scissors') ||
        (user === 'paper' && computer === 'rock') ||
        (user === 'scissors' && computer === 'paper')
    ) {
        return 'win';
    } else {
        return 'lose';
    }
}

function updateScore(result) {
    if (result === 'win') {
        userScore++;
        document.getElementById('user-score').innerText = `User: ${userScore}`;
    } else if (result === 'lose') {
        computerScore++;
        document.getElementById('computer-score').innerText = `Computer: ${computerScore}`;
    }
}

function displayResult(result, userChoice, computerChoice) {
    const resultDiv = document.getElementById('result');
    resultDiv.classList.remove('result-win', 'result-lose', 'result-tie');

    if (result === 'win') {
        resultDiv.innerText = `You win! ${userChoice} beats ${computerChoice}.`;
        resultDiv.style.color = 'green';
        resultDiv.classList.add('result-win');
    } else if (result === 'lose') {
        resultDiv.innerText = `You lose! ${computerChoice} beats ${userChoice}.`;
        resultDiv.style.color = 'red';
        resultDiv.classList.add('result-lose');
    } else {
        resultDiv.innerText = `It's a tie! You both chose ${userChoice}.`;
        resultDiv.style.color = 'gray';
        resultDiv.classList.add('result-tie');
    }
}

function animateChoices(userChoice, computerChoice) {
    const userButton = document.getElementById(userChoice);
    const computerButton = document.createElement('button');
    computerButton.innerText = computerChoice;
    computerButton.className = 'choices';
    document.body.appendChild(computerButton);

    userButton.classList.add('animated-choice');
    computerButton.classList.add('animated-choice');

    setTimeout(() => {
        userButton.classList.remove('animated-choice');
        computerButton.remove();
    }, 600);
}


// if(Yperson="scissor"){
//     if(Ycomputer="rock"){
//         answerbox.innerHTML="you lose"
//     }
//     if(Ycomputer="paper"){
//         answerbox.innerHTML="you won"
//     }
//     if(Ycomputer="scissor"){
//         answerbox.innerHTML="draw"
//     }
// }
