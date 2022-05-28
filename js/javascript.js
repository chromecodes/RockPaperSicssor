let computerSelection =
computerScore = 0;
playerScore = 0;
playerSelection = "";


function computerChoice() {
    switch (Math.floor(Math.random()*3)) {
        case 0:
        return "Rock"
        break;
        case 1:
        return "Paper"
        break;
        case 2:
        return "Scissor"
        break;
    }
}

function choice(playerSelection,computerSelection){
    if (playerSelection == "Rock") {
        pChoice.innerText = "✊";
    }  else if (playerSelection == "Paper") {
        pChoice.innerText = "✋";
        
    } else {
        pChoice.innerText = "✌";
       
    };

    if (computerSelection == "Rock") {
        cChoice.innerText = "✊";
    }  else if (computerSelection == "Paper") {
        cChoice.innerText = "✋";

    } else {
        cChoice.innerText = "✌";
        
    };
}

function playRound(playerSelection,computerSelection) {
   choice(playerSelection,computerSelection)
    if (playerSelection === computerSelection) {
        return `It's a Tie`;
    } else if ( playerSelection == "Rock" && computerSelection == "Paper") {
        return `You Lose! `+ computerSelection +` beats `+playerSelection+`.`
    } else if ( playerSelection == "Rock" && computerSelection == "Scissor") {
        return `You Won! `+ playerSelection +` beats `+ computerSelection+`.`
    }  else if ( playerSelection == "Paper" && computerSelection == "Scissor") {
        return `You Lose! `+ computerSelection +` beats `+playerSelection+`.`
    } else if ( playerSelection == "Paper" && computerSelection == "Rock") {
        return `You Won! `+ playerSelection +` beats `+ computerSelection+`.`
    } else if ( playerSelection == "Scissor" && computerSelection == "Rock") {
        return `You Lose! `+ computerSelection +` beats `+playerSelection+`.`
    } else if ( playerSelection == "Scissor" && computerSelection == "Paper") {
        return `You Won! `+ playerSelection +` beats `+ computerSelection+`.`
    }    
}


function score() {  
    if( playerScore === 5 || computerScore === 5){
        results();
    } else {
        comment.textContent = (playRound(playerSelection, computerSelection))
        if ((playRound(playerSelection, computerSelection)) === `You Won! `+ playerSelection +` beats `+ computerSelection+`.` ) {
            playerScore += 1;
            pScore.textContent = playerScore;
            results();

        } else if ( (playRound(playerSelection, computerSelection)) === `You Lose! `+ computerSelection +` beats `+playerSelection+`.`){
            
            computerScore += 1;
            cScore.textContent = computerScore;
            results();
            
        } 
    }
}
 
function results(){
    if ( playerScore === 5) {
        modal.style.display = "block";
        modal.classList.add("won");
        info.innerHTML = "Congrat's!!"+"<br>"+"You Won."
        again.textContent = "Play Again"
        again.addEventListener("click", playAgain)
        window.onclick = function(event) {
            if (event.target == modal) {
              modal.style.display = "none";
            }
          }
        
    } else if ( computerScore === 5 ) {
        modal.style.display = "block"
        modal.classList.add("lose");
        info.innerHTML = "What a Pity! "+"<br>"+"You Lost."
        again.textContent = "Try Again"
        again.addEventListener("click", playAgain)
        window.onclick = function(event) {
            if (event.target == modal) {
              modal.style.display = "none";
            }
          }
    }  
}

function playAgain(){
    modal.style.display = "none"
    playerScore = 0;
    pScore.textContent = playerScore;
    computerScore = 0;
    cScore.textContent = computerScore;  
    modal.classList.remove("lose");
}

const pScore = document.getElementById('pScore');
cScore = document.getElementById('cScore');
pChoice = document.getElementById('pChoice');
cChoice = document.getElementById('cChoice');
comment= document.getElementById('comment');
modal = document.getElementById('myModal');
again = document.getElementById('again');
info = document.getElementById('info');
buttons = document.querySelectorAll('button');

buttons.forEach((button) => { button.addEventListener('click', function(e) {
    playerSelection = button.value;
    computerSelection = computerChoice();
    //results();
    score();


  });
});


// new code 
 
//pChoice.innerText = String.fromCodePoint(parseInt(9994));