"use strict"
// Pari e Dispari
// ----------------------------------------------------------------------------------
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Chiedo prima di scegliere pari o dispari e poi di inserire un numero da 1 a 5 all'utente

let choiseEvenOdd = prompt("scegli: pari o dispari");
let userNum = parseInt(prompt("scrivi un numero da 1 a 5"));

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

function randomPcNum(){
   let pcNum = Math.floor(Math.random() * 5) +1;
    return pcNum;
}

let randNum = randomPcNum();

// Sommiamo i due numeri

let sum = randNum + userNum;
console.log (`La somma è ${sum}`)


// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

function evenOdd(number) {
    let num = "";
    if(number % 2 === 0){
        num = "pari";
    }else{
        num = "dispari";
    }
    return num;
}

let result = evenOdd(sum);

// Dichiariamo chi ha vinto.
// Se nel prompt l'utente ha scelto pari, ed il risultato della somma dei numeri è pari, l'utente ha vinto. 
// Idem se ha scelto dispari ed il numero è dispari.
// Se nel prompt non ha inserito le parole pari o dispari, facciamolo sapere all'utente. 

if(choiseEvenOdd === "pari") {
    console.log("Hai vinto!");
}else if(choiseEvenOdd === "dispari"){
    console.log("Hai perso!");
}else{
    console.log("Non hai scelto pari o dispari");
}

console.log("Hai scelto:", choiseEvenOdd)
console.log("il numero del pc è:", randNum);
console.log("il numero che hai scelto è:", userNum);
console.log("la somma dei numeri è:", result);
