console.log ("hello world")

function game() {
     let playerScore = 0
     let computerScore = 0
    for(let i=0; i<5; i++) {
        const playerChoice = prompt("Enter your choice on Rock,Paper,Sicssor","")

        function capitilize(x){
            return `${x.slice(0,1).toUpperCase()}${x.slice(1).toLowerCase()}`
        }
        const playerSelection = capitilize(playerChoice)

        const computerSelection = computerPlay();
        function computerPlay() {
            switch (Math.floor(Math.random()*3)) {
                case 0:
                return "Rock"
                break;
                case 1:
                    return "Paper"
                break;
                case 2:
                    return "Sicssor"
                break;
            }
        }

        function playRound(playerSelection,computerSelection) {
            if (playerSelection == computerSelection) {
                return `it's a tie`
            } else if ( playerSelection == "Rock" && computerSelection == "Paper") {
                return `You Lose! `+ computerSelection +` beats `+playerSelection+`.`
            } else if ( playerSelection == "Rock" && computerSelection == "Sicssor") {
                return `You Won! `+ playerSelection +` beats `+ computerSelection+`.`
            }  else if ( playerSelection == "Paper" && computerSelection == "Sicssor") {
                return `You Lose! `+ computerSelection +` beats `+playerSelection+`.`
            } else if ( playerSelection == "Paper" && computerSelection == "Rock") {
                return `You Won! `+ playerSelection +` beats `+ computerSelection+`.`
            } else if ( playerSelection == "Sicssor" && computerSelection == "Rock") {
                return `You Lose! `+ computerSelection +` beats `+playerSelection+`.`
            } else if ( playerSelection == "Sicssor" && computerSelection == "Paper") {
                return `You Won! `+ playerSelection +` beats `+ computerSelection+`.`
            }    
        }
        console.log(playRound(playerSelection, computerSelection));

        
       
        if ((playRound(playerSelection, computerSelection)) === `You Won! `+ playerSelection +` beats `+ computerSelection+`.` ) {
            playerScore = playerScore + 1

        } else if ( (playRound(playerSelection, computerSelection)) === `You Lose! `+ computerSelection +` beats `+playerSelection+`.`){
            computerScore = computerScore + 1
        }
    }
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
game()