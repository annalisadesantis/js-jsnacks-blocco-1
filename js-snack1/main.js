// L’utente inserisce due numeri in successione, con due prompt.

var numero1 = parseInt(prompt("Inserisci un numero"));

var numero2 = parseInt(prompt("Inserisci un altro numero"));

// Il software stampa il maggiore.


if (!isNaN(numero1) && !isNaN(numero2)){

    if (numero1 > numero2){
        console.log(numero1);
    } else if (numero1 < numero2){
        console.log(numero2);
    }else{
        console.log("I numeri sono uguali");
    }
} else{
    console.log("Non hai inserito un numero");
}
