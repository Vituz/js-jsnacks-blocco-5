/*
Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)
*/


function invertiStringhe(string){

    var reverseString = string.split("").reverse().join("");

    return reverseString;
}

var parola = prompt("Inserisci una parola");

console.log(invertiStringhe(parola));