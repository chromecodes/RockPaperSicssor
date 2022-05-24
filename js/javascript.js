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

function playRound(playerSelection,computerSelection) {
    pChoice.innerText = playerSelection;
    cChoice.textContent = computerSelection;
    if (playerSelection === computerSelection) {
        return `it's a tie`;
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
    comment.textContent = (playRound(playerSelection, computerSelection))
    if ((playRound(playerSelection, computerSelection)) === `You Won! `+ playerSelection +` beats `+ computerSelection+`.` ) {
        playerScore += 1;
        pScore.textContent = playerScore;

     } else if ( (playRound(playerSelection, computerSelection)) === `You Lose! `+ computerSelection +` beats `+playerSelection+`.`){
        computerScore += 1;
        cScore.textContent = computerScore;
     } 
     
 }
 
function results(){
    score();
    if ( playerScore === 5) {
        result.textContent = "Congrat's!! You Won the Game. "
    } else if ( computerScore === 5 ) {
        result.textContent = "What a Pity! You Lost The Game."
    }  
   
}
/* function playAgain(){
    playerScore = 0;
    computerScore = 0;
    result();
}*/ 
const pScore = document.getElementById('pScore');

const cScore = document.getElementById('cScore');

const pChoice = document.getElementById('pChoice');

const cChoice = document.getElementById('cChoice');

const comment= document.getElementById('comment')

const result= document.getElementById('result')

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => { button.addEventListener('click', function(e) {
    playerSelection = button.value;
    computerSelection = computerChoice();
    results();
    console.log(playerSelection);
    console.log(computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    console.log(playerScore);
    console.log(computerScore);
  });
});


        
   
    
        /*
    function score (){
    console.log('The computer score is: '+computerScore )
    console.log('Your score is: '+playerScore )
    if ( computerScore < playerScore) {
        return "Congrat's!! You Won the Game. "
    } else if ( computerScore > playerScore ) {
        return "What a Pity! You Lost The Game."
    } else {
        return " What a Game!, but it's a Draw, Wonna go Again."
    }
    }
    console.log(score())
}
*/