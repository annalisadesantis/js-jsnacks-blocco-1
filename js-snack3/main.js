// Il software deve chiedere per 5 volte all’utente di inserire un
// numero.

var somma = 0;

// Chiedo all'utente per 5 volte di inserire un numero
for (var i = 0; i < 5; i++){
    var numero_utente = parseInt(prompt("Inserisci il un numero"));
    // console.log(numero_utente);

    // A ogni ciclo io devo memorizzare il numero precendete e aggiungerlo a quello precedente
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
console.log("La somma dei tuoi numeri inseriti è " + somma);


// soluzione 2 ------------------------------------------------

// var numero_utente;
//
// // creo un array vuoto
// var tutti_numeri = [];
//
// for (var i = 0; i < 5; i++){
//     numero_utente = parseInt(prompt("Inserisci il un numero"));
//
//     // aggiungo nell'array il numero digitato
//     tutti_numeri.push(numero_utente);
// }
//
// // Qui ho tutti i numeri messi nell'array (uno accanto all'altro)
// console.log(tutti_numeri);
//
// // Creo una variabile somma 0 xkè non ho ancora inizato a contare
// var somma = 0;
//
// // devo leggere tutti i numeri presente nell'array
// for (var i = 0; i < tutti_numeri.length; i++){
//     // leggo tutti i numeri uno alla volta
//     var numero_corrente = tutti_numeri[i];
//     // accumulo la somma di tutti i numeri letti
//     somma = numero_corrente + somma;
// }
//
// // stampo la somma dei tutti_numeri
//
// console.log(somma);
