// Stampa il cubo dei primi N numeri, dove N è un numero
// indicato dall’utente.

// chiedo numero utente

var numero_utente = parseInt(prompt("Inserisci un numero"));


for (var i = 1; i <= numero_utente; i++){

    var cubo = Math.pow(i, 3);
    console.log("Il numero " + i + " al cubo è " + cubo);
}
