console.log ("hello world")

 function game(){
    for (let i = 0 ; i < 5 ; i++); {
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

console.log(playerChoice)
console.log(computerSelection)
console.log(playerSelection)

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
            }   else if ( playerSelection == "Sicssor" && computerSelection == "Rock") {
            return `You Lose! `+ computerSelection +` beats `+playerSelection+`.`
            } else if ( playerSelection == "Sicssor" && computerSelection == "Paper") {
            return `You Won! `+ playerSelection +` beats `+ computerSelection+`.`
            }    
        }
console.log(playRound(playerSelection, computerSelection));
    };
}
game()
