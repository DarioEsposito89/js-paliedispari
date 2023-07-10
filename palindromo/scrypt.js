// Palidroma
// --------------------------------------------------------------------------------------------------
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma 
// (una parola che si legge allo stesso modo anche da destra versi sinistra, ad esempio anna, otto)

// Chiedo una parola all'utente
let userWord = prompt("Inserisci una parola");

// Funzione in cui si lavora la parola
function palindrome(word){
    // Con .split si divide in una sorta di array ogni lettera della singola parola con una virgola
    let wordArray = word.split('');
    // l'ordine dell'array creato viene invertito
    let wordReverse = wordArray.reverse();
    // Viene tolta la virgola e si uniscono tutte le lettere formando una nuova parola
    let wordJoin = wordReverse.join('');
    
    // condizione se la parola è uguale a quella nuova unita nella funzione con .join, allora la parola è palindroma.
    if (word === wordJoin) {
        wordJoin = ("la parola è palindroma");
    }
    // Altrimenti la parola non è palindroma
    else{
        wordJoin = ("la parola non è palindroma");
    }

    return wordJoin;
}

// la parola palindroma è uguale a quella inserita dall'utente
let wordPalindrome = palindrome (userWord);
console.log(wordPalindrome);