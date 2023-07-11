"use strict"
// Pari e Dispari
// ----------------------------------------------------------------------------------
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Chiedo prima di scegliere pari o dispari e poi di inserire un numero da 1 a 5 all'utente
// let evenOdd = prompt("Scegli pari o dispari");
// let choiceNumber = Number(prompt("Inserisci un numero da 1 a 5"));


let choiceNumber = document.getElementById ("input-user").value;
let evenOdd = document.getElementById ("even-odd")
// funzione in cui si genera il numero random da 1 a 5 del pc
function numberPc(min, max) { 
    return Math.floor(Math.random() * (max - min) ) + min;
}

const btnCheck = document.getElementById("check");
btnCheck.addEventListener("click", function () {
let numRandomPc = parseInt(numberPc(1, 5));
console.log(`Il numero random del Pc è ${numRandomPc}`)
// Somma numero utente e numero pc
let summNum = (Number(choiceNumber) + numRandomPc);
console.log(`la somma dei numeri è ${summNum}`);

// Funzione se è pari il valore è True
function isEven(number) {
    if(number % 2 === 0) {

        return true;
    } else {

        return false
    }
    
}

// Condizione se la somma dei numeri è pari il valore è "pari", altrimenti è "dispari"
if(isEven(summNum)){
    summNum === "even" && summNum === true;
    console.log("la somma è pari")
} else {
    summNum === "odd" && summNum === false;
    console.log("La somma è dispari")
}

// condizioni per vedere se l'utente ha vinto oppre no
if (summNum == "even" && evenOdd == "pari") {
    console.log("Hai vinto!");
} else if (summNum == "odd" && evenOdd == "dispari"){
    console.log("Hai vinto, bravo!");
} else {
    console.log("Hai perso, riprova!");
}
})

const btnCancel = document.getElementById("cancel");
btnCancel.addEventListener("click", function () {
        // sparizione parametri 
        document.getElementById("input-user").value = "";
})
