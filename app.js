let userScore = 0;
let compScore = 0;
let drawScore = 0;

let choices = document.querySelectorAll(".button");
let msg = document.querySelector(".msg");

let userScorePara = document.querySelector("#count-you");
let compScorePara = document.querySelector("#count-comp");
let drawScorePara = document.querySelector("#count-draw");

let genCompChoice = () =>{
    let options = ["rock","paper","scissors"];
    let randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

let showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "Red";
    }
}

let drawGame = () => {
    drawScore++;
    drawScorePara.innerText = drawScore;
    msg.innerText = "Game was draw. Play again";
    msg.style.backgroundColor = "rgb(0, 166, 172)";
}

let playGame = (userChoice) =>{
    let compChoice = genCompChoice();

    if(userChoice === compChoice){
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = (compChoice === "paper") ? false : true;
        } else if(userChoice === "paper"){
            userWin = (compChoice === "scissors") ? false : true;
        } else {
            userWin = (compChoice === "rock") ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let choiceId = choice.getAttribute("id");
        playGame(choiceId);
    })
})
