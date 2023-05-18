/* Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */

let totalNumber = 0;

for (let i = 1; i <= 10; i++) {
    let userNumber = parseInt(prompt("Inserisci il " + i + "° numero"));
    if (isNaN(userNumber)) {
        alert("Il " + i + "° numero non ha un valore numerico valido. Verrà convertito in 0.")
        userNumber = 0;
    }
    console.log(userNumber);
    totalNumber += userNumber;
}

console.log("La somma dei numeri inseriti è " + totalNumber + ".");