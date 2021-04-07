// Toglogchiin eeljiig hadgalah huvisagch, 1r toglogchiig 0,  2r toglogchiig 1 gej temdegley.

let activePlayer = 0;



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

// Shoog shideh event listener
document.querySelector(".btn-roll").addEventListener("click", function() {
    // 1-6 iin random toog gargaj avna
    let diceNumber = Math.floor(Math.random() * 6) + 1;

    // Shoonii zurgiig web deer gargaj irne.
    diceDom.style.display = "block";

    // Buusan random toond hargalzah shoonii zyrag web deer gargaj irne
    diceDom.src = "dice-" + diceNumber + ".png";

    // Buusan too ni 1ees yalgaatai bol idevhitei Toglogchiin eeljiin onoog nemegdvvlne
    if (diceNumber !== 1) {
        // 1-ees yalgaatai buulaa.Buusan toog toglogchid nemj ogno
        roundScore = roundScore + diceNumber;
        document.getElementById("current-" + activePlayer).textContent = roundScore;
    } else {
        // 1 buusan tul toglogchiin eeljiig ene hesegt solij ogno.
        // Herev idevhitei toglogch ni 0 baival idevhitei toglogchiig 1 bolgono
        // Ugui bol idevhitei toglogchiig 0 bolgono

        scores[activePlayer] += roundScore;

        // Ene toglogchiin eeljindee tsugluulsan onoog 0 bolgono
        roundScore = 0;
        document.getElementById("current-" + activePlayer).textContent = 0;
        document.getElementById("score-" + activePlayer).textContent =scores[activePlayer];

        // Toglogchoo solij bn
        activePlayer = (activePlayer === 0 ? 1 : 0);

        // Ulaan tsegiig shiljvvleh
        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");

        // Shoog tvr alga bolgono (1 buusan ued)
        diceDom.style.display = "none";


    }



});
