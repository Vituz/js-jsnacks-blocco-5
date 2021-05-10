/*
Scrivi una funzione che accetti tre argomenti:
un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b”
*/


function searchInArray(array, number1, number2) {

    var newArray = [];

    for(var i = number1 - 1; i < number2; i++){
        newArray.push(array[i]);
        
    }

    console.log(newArray);

}


var commonObject = ["Palla", "Cestino", "Padella", "Sedia", "Tavolo", "Vaso", "Quaderno", "Matita", ];

var a = 0;
var b = 0;

var loopa = true;
var loopb = true;

while (loopb) {

    b = parseInt(prompt("Inserisci un numero"));

    if (isNaN(b) || b > commonObject.length || b < 2) {
        alert(`Il valore deve essere compreso tra 2 e ${commonObject.length}`);
        console.log(b);

    } else {
        loopb = false;
        console.log("Numero b: " + b);
    }

    console.log(loopb);

}

while (loopa) {
    a = parseInt(prompt("Inserisci un numero inferiore al precedente"));

    if (a >= b || a < 1 || isNaN(a)) {
        alert(`Il valore deve essere compreso tra 1 e ${b - 1}`);
        console.log(a);

    } else {
        loopa = false;
        console.log("Numero a: " + a);
    }

    console.log(loopa);

}

console.log(searchInArray(commonObject, a, b));