/* Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array. */

const oddNumbers = [];

for (let i = 1; i <= 6; i++) {
    let userNumber = parseInt(prompt("Inserisci il " + i + "° numero"));
    if (isNaN(userNumber)) {
        userNumber = 0;
    } else if ((userNumber % 2) != 0) {
        oddNumbers.push(userNumber);
    }
}

console.log(oddNumbers);