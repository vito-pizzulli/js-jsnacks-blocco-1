/* Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero. */

let totalNumber = 0;
let userNumber = prompt("Inserisci un numero di 4 cifre:");

if (isNaN(userNumber)) {
    console.log("Hai inserito un valore diverso da un numero.");
} else if (userNumber.length != 4) {
    console.log("Il numero inserito non ha 4 cifre.")
} else {

    for (let i = 0; i < userNumber.length; i++) {
        totalNumber += parseInt(userNumber.charAt(i));
    }
    
    console.log("La somma delle cifre del numero " + userNumber + " è " + totalNumber);
}