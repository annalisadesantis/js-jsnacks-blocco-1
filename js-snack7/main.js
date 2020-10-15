// Calcola la somma e la media dei numeri da 1 a 10.

// Creo delle variabili sia per i numeri sia per la somma

var min = 1;

var max = 10;

var somma = 0;

// Calcolo la somma dei valori da 1 a 10 con un ciclo for

for (var i = 1; i <= max; i++){
    somma = somma + i;
}

console.log("La somma dei numeri da " + min + " a " + max + " é " + somma);

// Calcolo la media dei valori da 1 a 10

var media = somma / max;

console.log("La media dei numeri da " + min + " a " + max + " é " + media);
