// Palidroma
// --------------------------------------------------------------------------------------------------
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma 
// (una parola che si legge allo stesso modo anche da destra versi sinistra, ad esempio anna, otto)

// Chiedo una parola all'utente
// let userWord = prompt("Inserisci una parola"); 

let userWord = document.getElementById("word-user").value;

let btnCheck = document.getElementById("check");
btnCheck.addEventListener("click", function () {
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
            document.getElementById("result").innerHTML= "La parola è plaindroma";
        }
        // Altrimenti la parola non è palindroma
        else{
            wordJoin = ("la parola non è palindroma");
            document.getElementById("result").innerHTML= "La parola NON è plaindroma";
        }

        return wordJoin;
    }
    
    

// la parola palindroma è uguale a quella inserita dall'utente
let wordPalindrome = palindrome (userWord);
console.log(wordPalindrome);
    })



const btnCancel = document.getElementById("cancel");
btnCancel.addEventListener("click", function () {
        // sparizione parametri
        document.getElementById("result").value = "";
        document.getElementById("word-user").value = "";
    })