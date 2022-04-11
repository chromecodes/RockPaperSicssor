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
        return "Congrat's You Won the Game "
    } else if ( computerScore > playerScore ) {
        return "what a pity you lost the game"
    } else {
        return " what a game but it's a draw wonna go again"
    }
    }
    console.log(score())
}
game()
/*
function loop(){
    for(let i=0; i<5; i++) {
    console.log(i)
        function multiple(){
        let num = prompt("give a number", )
        return num*num
        }
    console.log(multiple())
    }

}
console.log(loop())*/