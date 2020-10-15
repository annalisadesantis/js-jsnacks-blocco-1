// Crea un array vuoto.

var array = [ ];

// Chiedi per 6 volte all’utente di inserire
// un numero, se è dispari inseriscilo nell’array.


for (var i = 0; i < 6; i++){
    var numero_utente = parseInt(prompt("Inserisci il un numero"));

    var resto = numero_utente % 2;

    if(resto != 0) {
        array.push[numero_utente];
        console.log(numero_utente);
    }
}
