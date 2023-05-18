/* In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa. */

const guestList = [
    "Walter White",
    "Skyler White",
    "Jesse Pinkman",
    "Jane Margolis",
    "Gustavo Fring",
    "Saul Goodman",
    "Hank Schrader",
    "Marie Schrader"
]

let authorization = false;
const userName = prompt("Inserisci il tuo nome");
const userLastName = prompt("Inserisci il tuo cognome");
let userAuthorized;

for (let i = 0; i < guestList.length; i++) {
    if (userName + " " + userLastName === guestList[i]) {
        userAuthorized = (userName + " " + userLastName);
        authorization = true;
    }
}

if (authorization === true) {
    console.log("Congratulazioni " + userAuthorized + ", sei in lista e puoi partecipare alla festa.");
} else {
    console.log("Ci dispiace " + userName + " " + userLastName + ", purtroppo non sei in lista e non puoi partecipare alla festa.")
}