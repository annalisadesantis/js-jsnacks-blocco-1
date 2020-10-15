// Il software deve chiedere per 5 volte all’utente di inserire un
// numero.

var somma = 0;

for (var i = 0; i < 5; i++){
    var numero_utente = parseInt(prompt("Inserisci il un numero"));
    // console.log(numero_utente);
    somma = numero_utente + somma;

    //somma = 1 + 0
    // 1 = 4 + 1 = 5
    // 5 = 5 + 5 = 10
    // 10 = 3 + 10 = 13
    // 13 = 2 + 13 = 15
    // 15 ....

    //somma += numero_utente; è la stessa cosa che scrivere: somma = numero_utente + somma;
}

// Il programma stampa la somma di tutti i numeri inseriti.
console.log(somma);
