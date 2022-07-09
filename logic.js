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
