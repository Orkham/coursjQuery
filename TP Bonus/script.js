let vitesseGenerale = document.getElementById("vitesseGeneraleResult");
let vitesseIntermediaire = document.getElementById("vitesseInter");
let testButton = document.getElementById("test");
let text = document.getElementById("text");
let timer;
let timerInter;
let nbreLettresTapees = 0;

/**
 * Déclenchement du timer
 * @returns {number}
 */
function startTimer() {
    let start = new Date().getTime();
    return start;
}

/**
 * Ecouteur sur le focus pour déclencher le timer
 */
text.addEventListener("focus", function () {
    timer = startTimer();
    timerInter = startTimer();

});

/**
 * Ecouteur sur le bouton pour calculer la vitesse
 */
testButton.addEventListener("click", function () {
    let lettersPerMinute = calculateTypingSpeed(areaLength, (new Date().getTime() - timer));
    vitesseGenerale.textContent = lettersPerMinute;
});


function nbreLettresDuTextarea(area){
    return area.split("");
}

let areaLength = nbreLettresDuTextarea(text.value).length;
console.log(areaLength);
/**
 * Calcul de la vitesse de saisie
 * @param text récupéré depuis le textarea et qui sera découpé en tableau de caractères
 * @param time temps sur lequel effectué le calcul
 * @returns {number}
 */
function calculateTypingSpeed(areaLength, time) {
    console.log(areaLength);
    let lettersPerMinute = Math.round(areaLength / (time / 6000));
    return lettersPerMinute;
}

/**
 * Déclenchement d'un interval calculant toutes les 5 secondes
 * @type {number}
 */
const myTimeout = setInterval(calculateTypingSpeed, 5000, areaLength, (5000));


let tempsDepuisDernierInter;
text.addEventListener("keyup", function () {
    nbreLettresTapees++;

    tempsDepuisDernierInter = (new Date().getTime() - timerInter);
    if (tempsDepuisDernierInter > 5000) {
        console.log(tempsDepuisDernierInter);
        timerInter = startTimer();
        vitesseIntermediaire.textContent = calculateTypingSpeed(nbreLettresTapees,(tempsDepuisDernierInter));
        console.log(vitesseIntermediaire.textContent);
        nbreLettresTapees = 0;
    }
});
