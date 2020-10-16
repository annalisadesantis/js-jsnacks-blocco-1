// Stampa il cubo dei primi N numeri, dove N è un numero
// indicato dall’utente.

// chiedo numero utente

var numero_utente = parseInt(prompt("Inserisci un numero"));

// Devo partire da 1 e arrivare a numero utente
for (var i = 1; i <= numero_utente; i++){

    // metto la i xkè è lei che mi fa scorrere tutti i numeri
    var cubo = Math.pow(i, 3);
    console.log("Il numero " + i + " al cubo è " + cubo);
}
