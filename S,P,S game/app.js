let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector('#msg');

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const getCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randInd = Math.floor(Math.random()*3);
    return options[randInd];
};

const drawGame = () => {
    console.log("Game was draw.");
    msg.innerText = "Game was Draw, Play again!!";
    msg.style.backgroundColor = "black";
}


const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win!!!");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "hwb(120 9% 26%)";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You Lose!!!");
        msg.innerText = `You Lose! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "#ff0000";
    }
}

const playGame = (userChoice) => {
    console.log("user choice= ", userChoice);
    const compChoice = getCompChoice();
    console.log("Comp choice= ", compChoice);

    if(userChoice == compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        } else{
            userWin = compChoice === "rock" ? false : true;
        }
    showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked", userChoice); 
        playGame(userChoice);
    });
});