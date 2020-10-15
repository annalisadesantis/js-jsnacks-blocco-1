// Stampa il cubo dei primi N numeri, dove N è un numero
// indicato dall’utente.

// chiedo numero utente

var numero_utente = parseInt(prompt("Inserisci un numero"));




for (var i = 0; i < 3; i++){

    var cubo = Math.pow(numero_utente, 3);
    console.log(cubo);
}
