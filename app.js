// Togloomiin bvh gazar ashiglagdah Global huvisagchiig end zarlay

// Ali toglogch shooog shideh ve gedgiig hadgalah huvisagch
let activePlayer;
// Toglogchdiin tsugluulsan onoog hadgalah huvisagch
let scores;
// Toglogchiin eeljindee tsugluulj baigaa onoog hadagalah huvisagch
let roundScore;

// Shoonii zurgiig vzvvleh elementiig DOM-oos haij olood end hadgalya
let diceDom = document.querySelector(".dice");

// Start GAME
initGame();

// Togloomiig shineer ehlehed beltgene
function initGame(){
    activePlayer = 0;
    // Toglogchdiin tsugluulsan onoog hadgalah huvisagch
    scores = [0, 0];
    // Toglogchiin eeljindee tsugluulj baigaa onoog hadagalah huvisagch
    roundScore = 0;

    // Programm ehlehed beltgey
    document.getElementById("score-0").textContent =0;
    document.getElementById("score-1").textContent = 0;
    document.getElementById("current-0").textContent = 0;
    document.getElementById("current-1").textContent = 0;

    // Toglogchidiin neriig butsaaj gargah
    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");
    diceDom.style.display = "none";
}


// Shoog shideh event listener  BTN-ROLL

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
        switchToNextPlayer();
    }
});

// HOLD tovchnii Event Listener

document.querySelector(".btn-hold").addEventListener("click", function() {
    // Ug toglogchiin tsugluulsan eeljin onoog Global onoon deer nemj ogno
    scores[activePlayer] += roundScore;

    // Delgets deer onoog oorchilj uzuulne
    document.getElementById("score-" + activePlayer).textContent =scores[activePlayer];

    // Check the winner (point up than 100)
    if (scores[activePlayer] >= 20) {
        // Winner textiig nerniih ni orond gargana
        document.getElementById("name-" + activePlayer).textContent = "WINNER!!!"
        document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
        document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
    } else {     
        //toglogchiin eeljiig ene hesegt solij ogno.
        switchToNextPlayer();
    }
})

// This function changes the player's turn.
function switchToNextPlayer() {
   // Ene toglogchiin eeljindee tsugluulsan onoog 0 bolgono, utgiig ni 0 gej vzvvlne
   roundScore = 0;
   document.getElementById("current-" + activePlayer).textContent = 0;

   // Toglogchiin eeljiig solino
   activePlayer = (activePlayer === 0 ? 1 : 0);

   // Ulaan tsegiig shiljvvleh
   document.querySelector(".player-0-panel").classList.toggle("active");
   document.querySelector(".player-1-panel").classList.toggle("active");

   // Shoog tvr alga bolgono (1 buusan ued)
   diceDom.style.display = "none";
};

// New game nuyu ehluuleh tovchnii Event Listener
document.querySelector(".btn-new").addEventListener("click", initGame);
