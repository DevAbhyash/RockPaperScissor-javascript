let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div_p = document.querySelector(".result > p");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");

//function for ending the game


//creating computerSelection filter
function getComputerSelection() {
    const data = ["r", "p", "s"];
    const wholeNumber = Math.floor(Math.random() * 3);
    console.log(wholeNumber)
    return data[wholeNumber];
}
//creating better word length
function createLength(length) {
    if (length === "r") return "Rock";
    if (length === "s") return "Scissor";
    return "paper";
}
const userWord = "user".fontsize(3).sub();
const compWord = "comp".fontsize(3).sub();

function win(userSelect, computerSelect, ) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div_p.innerHTML = `${createLength(userSelect)}${userWord} defeats ${createLength(computerSelect)}${compWord} KARKI MAMA WON 🐷`;
    gameWon()
}

function loss(userSelect, computerSelect, ) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_div_p.innerHTML = `${createLength(computerSelect)}${compWord} defeats ${createLength(userSelect)}${userWord}BABU WON 🐵`;
    gameEnd()

}

function draw(userSelect, computerSelect) {
    result_div_p.innerHTML = `${createLength(userSelect)} ${createLength(computerSelect)} MATCH IS DRAW! 💩`
}




function gameEnd() {
    const conclusion = document.getElementById("action-message");
    if (computerScore >= 3) {

        conclusion.innerText = `GAME OVER 💩`;
    }
}

function gameWon() {
    const conclusion = document.getElementById("action-message");
    if (userScore >= 3) {
        conclusion.innerText = `YOU WON 🤡`;
    }
}




//creating game switch file
function game(userSelect) {
    const computerSelect = getComputerSelection();
    switch (userSelect + computerSelect) {
        case "rs":
        case "sp":
        case "pr":
            win(userSelect, computerSelect);
            break;
        case "rp":
        case "ps":
        case "sr":
            loss(userSelect, computerSelect);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userSelect, computerSelect);

    }
}

//creating clicking function for rock paper and scissor //
function main() {
    rock.addEventListener("click", function() {
        game("r");
    })
    paper.addEventListener("click", function() {
        game("p");
    })
    scissor.addEventListener("click", function() {
        game("s");
    })
}
main();