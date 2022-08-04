
//  we want to make a Rock-Paper-Scissors game 

/* The main idea of the game :

A simultaneous, zero-sum game, it has three possible outcomes: a draw, a win or a loss.
 A player who decides to play rock will beat another player who has chosen scissors ("rock crushes scissors" or "breaks scissors" or sometimes "blunts scissors"[4]), but will lose to one who has played paper ("paper covers rock"); a play of paper will lose to a play of scissors ("scissors cuts paper"). If both players choose the same shape, the game is tied and is usually immediately replayed to break the tie. The game spread from China while developing different variants in signs over time.

Rock Paper Scissors is often used as a fair choosing method between two people,
 similar to coin flipping, drawing straws, or throwing dice in order to settle a dispute 
 or make an unbiased group decision. Unlike truly random selection methods, however, rock paper
  scissors can be played with a degree of skill by recognizing and exploiting non-random behavior
   in opponents.[5][6]
*/


/* algorithm : 
 
1 .  make the player choose the value  between ( rock , paper , scissors )
2 . make the computer choose randomly between the three values 
3. if the choice of the player
  * is rock and the cpu is  scissor  player win
                            rock  player draw 
                            paper player lose  
   and vice versa . 
*/                            







// A function to randomize choice length 

/*function randomInt(choice){


   return Math.floor(Math.random() * Math.floor(choice));
}*/

function capitalizeFirstLetter(str) {
   return str[0] + str.slice(1).toLowerCase();
 }

// A function to get random computer choice 

function getComputerChoice()
{

let choice = ['ROCK' , 'PAPER', 'SCISSORS'];


return choice[Math.floor(Math.random() * choice.length)];

}

function playRound(PlayerSelection , ComputerSelection)
{
    // to ensure that the player and computer selection is case insensitive 

   PlayerSelection = PlayerSelection.toUpperCase();
  // ComputerSelection = ComputerSelection.toUpperCase();
   
   if (PlayerSelection == ComputerSelection)
   {
      return "It is a draw ! no one lose";
   }
   
  else  if ( PlayerSelection == 'ROCK' && ComputerSelection == 'SCISSORS' ){
          return "You win! Rock beats Scissors";
   }
   else if (PlayerSelection ==  'SCISSORS' && ComputerSelection == 'PAPER'){
       return "You win! Scissors beats Paper";
   }
   else if (PlayerSelection == 'PAPER' && ComputerSelection == 'ROCK'){
      return "You win! Paper beats Rock";
   }
   else {
      return `You lose! ${capitalizeFirstLetter(ComputerSelection)} beats ${capitalizeFirstLetter(PlayerSelection)}`; 
   }
  
}

/*function game(){



const PlayerSelection = prompt(" Please select Rock , Paper or Scissors:");
const ComputerSelection = getComputerChoice();
console.log(playRound(PlayerSelection,ComputerSelection));
   


}*/




const rock = document.getElementById("rock-btn");
const paper = document .getElementById("paper-btn");
const scissors = document.getElementById("scissors-btn");


function rockPrint(){
   const ComputerSelection = getComputerChoice();
   return playRound("ROCK",ComputerSelection);

}
function paperPrint(){
   const ComputerSelection = getComputerChoice();
   return playRound("PAPER",ComputerSelection);
   
}
function scissorsPrint(){
   const ComputerSelection = getComputerChoice();
   return playRound("SCISSORS",ComputerSelection);
   
}

function showWinner(selection){
   const winner = document.getElementById("winner");
   if (selection = "rock"){
  winner.textContent = rockPrint();

   }
   else if (selection = "paper"){
      winner.textContent = paperPrint();
   }
   else if (selection = "scissors"){
      winner.textContent = scissorsPrint();
   }

}



rock.addEventListener("click" , function(){
   console.clear();
   showWinner("rock");
});
paper.addEventListener("click" ,function(){
   console.clear();
  showWinner("paper");
});
scissors.addEventListener("click" ,function(){
   console.clear();
   showWinner("scissors");
});







// Calling the game function

//game();


//trial



