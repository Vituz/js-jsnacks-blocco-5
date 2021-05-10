/*
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
 */

var zucchineLunghe = [];
var zucchineCorte = [];


for(var i = 0; i < 10; i++){

    var zucchina = {
        lunghezza : rndNumber (8, 23),
        peso : rndNumber(50, 100)
    }

    console.log(zucchina);

    if (zucchina.lunghezza < 15){
        zucchineCorte.push(zucchina);
    } else {
        zucchineLunghe.push(zucchina);
    }
}

console.log(zucchineLunghe);
console.log(zucchineCorte);

/*
Infine stampa separatamente quanto pesano i due gruppi di zucchine.
 */


function rndNumber (min, max){
    return Math.floor(Math.random() * (max - min +1)) + min;
}

function pesoTotale (array){

    var pesoTotale = 0;
    
    for(var i = 0; i < array.length; i++){

        pesoTotale += parseInt(array[i].peso);

    }

    return pesoTotale;

}

console.log(`Il peso totale delle zucchine più corte di 15cm è: ${pesoTotale(zucchineCorte)} gr`);
console.log(`Il peso totale delle zucchine più lunghe di 15cm è: ${pesoTotale(zucchineLunghe)} gr`);




