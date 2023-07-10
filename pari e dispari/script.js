// Pari e Dispari
// ----------------------------------------------------------------------------------
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Chiedo prima di sceglieri pari o dispari e poi di inserire un numero da 1 a 5 all'utente
let evenOdd = prompt("Scegli pari o dispari");
let choiceNumber = Number(prompt("Inserisci un numero da 1 a 5"));

// funzione in cui si genera il numero random da 1 a 5 del pc
function numeroPc(min, max) { 
    return Math.floor(Math.random() * (max - min) ) + min;
}

let numRandomPc = parseInt(numeroPc(1, 5));
console.log(`Il numero random del Pc è ${numRandomPc}`)
// Somma numero utente e numero pc
let summNum = choiceNumber + numRandomPc;
console.log(`la somma dei numeri è ${summNum}`);

// Funzione se è pari il valore è True
function isEven(number) {
    if(number % 2 === 0) {
        return true;
    }
}
