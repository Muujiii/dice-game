// Toglogchiin eeljiig hadgalah huvisagch, 1r toglogchiig 0,  2r toglogchiig 1 gej temdegley.

let activePlayer = 1;



// Toglogchdiin tsugluulsan onoog hadgalah huvisagch

let scores = [0, 0];


// Toglogchiin eeljindee tsugluulj baigaa onoog hadagalah huvisagch

let roundScore = 0;


// Shoonii ali talaaraa buusniig hadgalah huvisagch heregtei, 1-6 gesen utgiig ene huvisagchid sanamsargvigeer uusgej ogno.


// window.document.querySelector("#score-0").textContent = dice;
// document.querySelector("#score-1").innerHTML = "<em>dice</em>";

document.getElementById("score-0").textContent =0;
document.getElementById("score-1").textContent = 0;
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;

let diceDom = document.querySelector(".dice");

diceDom.style.display = "none";

document.querySelector(".btn-roll").addEventListener("click", function() {
    let diceNumber = Math.floor(Math.random() * 6) + 1;
    diceDom.style.display = "block";
    diceDom.src = "dice-" + diceNumber + ".png";
});
