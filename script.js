let hasard = Math.random();//hasard entre 0 et 1
//console.log(Math.round(hasard*100));//hasard entre 0 et 100

/* 2 */

let phrase = "une chaine avec des lettres dans un certain ordre pour donner du sens";
let array = [...phrase];
//console.log("array : " + array.sort());
let phraseTriée = phrase.split("").sort().join("");
//console.log("Les lettres triées de cette phrase sont : " + phraseTriée.trim());

/* 3 */

//first letter of each word in uppercase
let phrase2 = "une phrase sans majuscule";
let phraseTriée2 = phrase2.split(" ").map((word) =>
    word.charAt(0).toUpperCase() + word.slice(1)
).join(" ");
//console.log(phraseTriée2)

//console.log("une phrase sans majuscule".split(" ").map((word) =>word.charAt(0).toUpperCase() + word.slice(1)).join(" "))

/* 1 */

let nbreTirages;

function tirage() {
    let tableauDeResultats = new Set();
    for (let i = 0; tableauDeResultats.size < 100; i++) {
        let hasard = Math.round(Math.random() * 100);
        tableauDeResultats.add(hasard)
        nbreTirages = i
    }
    //console.log(nbreTirages + " tirages");
    return nbreTirages
}

//tirage();
let i;
console.time("start");
do{
    nbreTirages = tirage();
    i++;
}while(nbreTirages != 100);
console.timeEnd("start");
console.log(i);

