// reset all values to zero
const defScore1 = document.querySelector("#score--0");
defScore1.textContent = 0;

const defScore2 = document.querySelector("#score--1");
defScore2.textContent = 0;

//To hide the dice
const diceE1 = document.querySelector(".dice");

//The hidden was set to display of none in CSS
diceE1.classList.add("hidden");

document.querySelector(".btn--roll").addEventListener("click", function () {
    //To display after the button is clicked
    diceE1.classList.remove("hidden");

    // To generate a random number 
    const diceNum = Math.trunc(Math.random() * 6) +1;
    //To make the image show the random number(we use template literal here)
    diceE1.src =`./image/dice-${diceNum}.png`;
    // console.log(diceNum)

    const score1 = document.getElementById("current--0");
    const Score2 = document.getElementById("current--1");
    let defRoll = 0;
    let asPlayer = 0;
    //The 1 condition 

    if (diceNum !== 1) {
        defRoll += diceNum; 
        document.getElementById(`current--${asPlayer}`).textContent = 
        defRoll;
    } else {
        //to switch player when a player gets 1
        document.getElementById(`current--${asPlayer}`).textContent = 1;
        asPlayer = asPlayer === 1 ? 1 : 0;
        defRoll = 0;
    }
});