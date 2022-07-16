
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


let choice = ['Rock' , 'Paper', 'Scissors'];


// A function to randomize choice length 

function randomInt(x){


   return Math.floor(Math.random() * Math.floor(x));
}


// A function to get random computer choice 

function getComputerChoice(choice){

let index =  randomInt(choice.length);

return choice[index];

}



