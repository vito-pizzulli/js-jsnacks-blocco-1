/* Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array. */

const oddNumbers = [];
const oddNumbersList = document.querySelector('div.container');

for (let i = 1; i <= 6; i++) {
    let userNumber = parseInt(prompt("Inserisci il " + i + "° numero"));
    if (isNaN(userNumber)) {
        oddNumbersList.innerHTML += "<p> Il " + i + "° numero inserito non è valido.</p>";
        userNumber = 0;
    } else if ((userNumber % 2) != 0) {
        oddNumbersList.innerHTML += "<p> Il " + i + "° numero inserito è " + userNumber + ".</p>";
        oddNumbers.push(userNumber);
    } else {
        oddNumbersList.innerHTML += "<p> Il " + i + "° numero inserito è " + userNumber + ".</p>";
    }
}

if (oddNumbers.length === 0) {
    oddNumbersList.innerHTML += "<p> Non sono stati inseriti numeri dispari, l'array è vuoto.</p>";
} else {
    oddNumbersList.innerHTML += "<p> Il contenuto dell'array è: " + oddNumbers + "</p>";
}