// Stampa le potenze di 2 senza superare il numero 1000.

var numero = 2;

var esponente = 0;

var potenza = 1;


for (var i = 1; i <= 20; i++){

    if (esponente == 0) {
        // se 2 elevato a 0 è 1
        console.log("Il numero " + numero + " elevato alla potenza di " + esponente + " è " + potenza);
    } else {
        // base moltiplicata per l'esponente
        // 2*0=1
        // 2*1=2
        // 2*2=4
        // 2*4=8
        // 2*8=16
        // ....

        // Ragionamento superiore ma con l'uguale per primo
        potenza = potenza * numero;

        // La potenza (risultato) deve essere minore o uguale a 1000 se fosse superiore si ferma il ciclo
        if (potenza <= 1000) {
            console.log("Il numero " + numero + " elevato alla potenza di " + esponente + " è " + potenza);
        }
    }
    // Aumentiamo l'esponente per incremento
    esponente++;
}
