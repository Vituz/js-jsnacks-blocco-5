/*
Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
*/


var listaNomi = ["Marco", "Francesco", "Silvia", "Sara"];

var listaCognomi = ["Rossi", "Verdi", "Gialli", "Bianchi"];

/**
 * La funzione accetta due array in ingresso di uguale lunghezza e
 * li concatena in un unico array alternando i valori.
 * 
 * @param {array} array1 
 * @param {array} array2
 * @returns {array} array concatenato
 */

function concatArray(array1, array2){
    var arrayFinale = [];

    var i = 0;
    while(i < array1.length){

        arrayFinale.push(array1[i], array2[i]);

        i++;
    }

    return arrayFinale;
}

console.log(concatArray(listaNomi, listaCognomi));