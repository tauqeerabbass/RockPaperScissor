let userScore = 0;
let compScore = 0;
let msg = document.getElementById("msg");

let choices = document.querySelectorAll(".choice");

const generateComp = () =>{
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

const checkWinner = (userChoice, compChoice)=>{
    if (userChoice === "rock" && compChoice === "paper"){
        compScore++;
        document.getElementById("comp-score").innerText = compScore;
        msg.innerText = "You lost!";
        msg.style.backgroundColor = "red";
    }
    else if(userChoice === "rock" && compChoice === "scissors"){
        userScore++;
        document.getElementById("user-score").innerText = userScore;
        msg.innerText = "You won!";   
        msg.style.backgroundColor = "green";  
    }
    else if (userChoice === "paper" && compChoice === "rock"){
        userScore++;
        document.getElementById("user-score").innerText = userScore;
        msg.innerText = "You won!"; 
        msg.style.backgroundColor = "green";    
    }
    else if (userChoice === "paper" && compChoice === "scissors"){
        compScore++;
        document.getElementById("comp-score").innerText = compScore;
        msg.innerText = "You lost!";
        msg.style.backgroundColor = "red";
    }
    else if (userChoice === "scissors" && compChoice === "rock"){
        compScore++;
        document.getElementById("comp-score").innerText = compScore;
        msg.innerText = "You lost!";
        msg.style.backgroundColor = "red";
    }
    else if (userChoice === "scissors" && compChoice === "paper"){
        userScore++;
        document.getElementById("user-score").innerText = userScore;
        msg.innerText = "You won!"; 
        msg.style.backgroundColor = "green";
    }
    else if (userChoice === compChoice){
        msg.innerText = "It was Draw";
        msg.style.backgroundColor = "#081b31";
    }
}

const playGame = (userChoice)=>{
    const compChoice = generateComp();
    console.log(`User: ${userChoice}, Computer: ${compChoice}`);
    checkWinner(userChoice, compChoice);
}

choices.forEach((choice) =>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);   
})});