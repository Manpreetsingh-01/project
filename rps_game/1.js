let userScore= 0;
let compScore = 0;


const options = document.body.querySelectorAll(".icon");

const drawGame = () => {
    document.body.querySelector("p").innerText = "Game draw";
    document.body.querySelector("p").style.backgroundColor = "#37505C"
}

const compChoice = () => {
    let array = ["rock" , "paper" , "scissors"];
    const randomIndex = Math.floor(Math.random()*3);
    return array[randomIndex];
}

const playGame = (user) =>{
    const comp = compChoice();

    if(user === comp){
        drawGame();
    }
    else{
        if(user == "rock"){
            if(comp == "paper"){
                compScore++;
                document.body.querySelector("#compscores").innerText = compScore;
                document.body.querySelector("p").innerText = "Computer Wins";
                document.body.querySelector("p").style.backgroundColor = "#F64740"
            }
            else{
                userScore++;
                document.body.querySelector("#userscores").innerText = userScore;
                document.body.querySelector("p").innerText = "You Wins";
                document.body.querySelector("p").style.backgroundColor = "#548C2F"

            }
        }
        else if(user == "paper"){
            if(comp == "rock"){
                userScore++;
                document.body.querySelector("#userscores").innerText = userScore;
                document.body.querySelector("p").innerText = "You Wins";
                document.body.querySelector("p").style.backgroundColor = "#548C2F"
            }
            else{
                compScore++;
                document.body.querySelector("#compscores").innerText = compScore;
                document.body.querySelector("p").innerText = "Computer Wins";
                document.body.querySelector("p").style.backgroundColor = "#F64740"
            }

        }
        else{
            if(comp == "rock"){
                compScore++;
                document.body.querySelector("#compscores").innerText = compScore;
                document.body.querySelector("p").innerText = "Computer Wins";
                document.body.querySelector("p").style.backgroundColor = "#F64740"
            }
            else{
                userScore++;
                document.body.querySelector("#userscores").innerText = userScore;
                document.body.querySelector("p").innerText = "You Wins";
                document.body.querySelector("p").style.backgroundColor = "#548C2F"
            }

        }
    }

}

options.forEach((choice) =>{
    choice.addEventListener("click" , () =>{
        const choiceId = choice.getAttribute("id");
        playGame(choiceId);
    })
})
