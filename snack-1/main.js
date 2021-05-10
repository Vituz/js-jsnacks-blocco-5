/*
Crea un array di 10 oggetti che rappresentano una zucchina, 
indicando per ognuna varietà, peso e lunghezza.
*/

var zucchine = [

    {
        varieta: 'romanesca',
        peso : 50,
        lunghezza : 12
    },
    {
        varieta: 'nera',
        peso : 80,
        lunghezza : 20
    },
    {
        varieta: 'ortolana',
        peso : 65,
        lunghezza : 18
    },
    {
        varieta: 'fiorentina',
        peso : 73,
        lunghezza : 23
    },
    {
        varieta: 'romanesca',
        peso : 58,
        lunghezza : 13
    },
    {
        varieta: 'romanesca',
        peso : 48,
        lunghezza : 8
    },
    {
        varieta: 'ortolana',
        peso : 67,
        lunghezza : 19
    },
    {
        varieta: 'ortolana',
        peso : 70,
        lunghezza : 20
    },
    {
        varieta: 'nera',
        peso : 75,
        lunghezza : 19
    },
    {
        varieta: 'romanesca',
        peso : 55,
        lunghezza : 12
    },

]

console.log(zucchine);

/*
Calcola quanto pesano tutte le zucchine.
*/

var pesoTotale = 0;

for (var i = 0; i < zucchine.length; i++){

    pesoTotale += parseInt(zucchine[i].peso);
    
}

console.log(`${pesoTotale} gr`);
