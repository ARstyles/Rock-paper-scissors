let userScore = 0;
let compScore = 0;
const userScorePara = document.querySelector("#user-score");
const CompScorePara = document.querySelector("#comp-score");
const msg = document.querySelector("#msg");

const choices = document.querySelectorAll(".choice");

const genCompChoice=()=>{
        const options=["rock","paper","scissors"];
        const randIdx=Math.floor(Math.random()*3);
        return options[randIdx];
}

const drawGame =()=>{
    msg.innerText="Game Draw play again😒";
    msg.style.backgroundColor="#081b31";
    //console.log("game was draw.");
}

const showWinner =(userWin,userChoice,CompChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        //console.log("You win");
        msg.innerText=`You Win😎your ${userChoice} beats ${CompChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        CompScorePara.innerText=compScore;
        //console.log("You lost");
        msg.innerText=`You lose🤡 ${CompChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame = (userChoice) => {
    //console.log(`${userChoice} was clicked`);
    //Generate comp choice
    const CompChoice=genCompChoice();
    //console.log(`computer chose ${CompChoice}`);

    if(userChoice===CompChoice){
        drawGame();
    }
    else {
        let userWin = true;
        if(userChoice==="rock"){
            userWin=CompChoice ==="paper"?false:true;
        }else if(userChoice==="paper"){
            userWin=CompChoice==="rock"?true:false;
        }else{
            userWin=CompChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,CompChoice);
    }
};


choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice =choice.getAttribute("id");
        playGame(userChoice);
    })
})