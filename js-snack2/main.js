// L’utente inserisce due parole in successione, con due prompt.

var parola1 = prompt("Inserisci una parola");

var parola2 = prompt("Inserisci un'altra parola");


// Il software stampa prima la parola più corta, poi la parola più lunga.

var lunghezza1 = parola1.length;
var lunghezza2 = parola2.length;

if (lunghezza1 > lunghezza2){
    console.log(parola2);
    console.log(parola1);
}else if (lunghezza1 < lunghezza2){
    console.log(parola1);
    console.log(parola2);
}else{
    console.log("sono lunghe uguali");
}
