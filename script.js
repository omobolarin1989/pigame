"use strict"
//reset the score

const defScore0 = document.querySelector("#score--0");
const defScore1 = document.querySelector("#score--1");
const dice1 = document.querySelector(".dice");

const curScore1 = document.getElementById("current--0");
const curScore2 = document.getElementById("current--1");  

defScore0.textContent = 0;
defScore1.textContent = 0;
//To hide the dice image
dice1.classList.add("hidden");


let curScore = 0;
let acPlayer = 0;
let playing = true;

const btnRoll = document.querySelector(".btn--roll")

btnRoll.addEventListener("click", function () {

if (playing) {
    //Generate Random Number
    const dice = Math.trunc(Math.random() * 6) + 1; 
    //To chose a image for rolled button
    dice1.src = `./image/dice-${dice}.png`;
    //To display dice image that was hidden
    dice1.classList.remove("hidden");

    if (dice !==1) {
        curScore += dice;
        document.getElementById(`current--${acPlayer}`).textContent =
         curScore;
    } else{
        //Switch to player 2
       function switchPlayer() {
        document.getElementById(`current--${acPlayer}`).textContent = 0 ;
        //Set current score to zero
        curScore = 0;

        acPlayer = acPlayer === 0 ? 1 : 0;
        
       }

       switchPlayer();
    }

}

});

//For Hold button functionality

let scores = [0, 0];
const btnHold =document.querySelector(".btn--hold")

btnHold.addEventListener("click", function () {
    
    if (playing) {
        //add curScore to player's score
        scores[acPlayer] = curScore;
        //display the curScore for the player
        document.getElementById(`score--${acPlayer}`).textContent = 
        scores[acPlayer];

        //if Active player score is >=100, exit game

        if (scores[acPlayer] >=100 ) {
            //end game
            dice1.classList.add("hidden");

            //None of the button should function
            playing = false;
            document.querySelector(`.player--${acPlayer}`).classList.add("Player --Winner")
            //to remove the player active class
            document.querySelector(`.player--${acPlayer}`).classList.remove("Player --Winner")

        } else {
            switchPlayer();
        }


        
    }

});

//For the new game button
const btnNew = document.querySelector(".btn--new");

btnNew.addEventListener("click", function () {
   dice1.classList.add("hidden");
   defScore0.textContent = 0;
   defScore1.textContent = 0;
   curScore1.textContent = 0;
   curScore2.textContent = 0;


});

