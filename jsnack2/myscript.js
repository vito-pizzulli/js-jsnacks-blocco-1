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

const confirmButton = document.querySelector('button');
confirmButton.addEventListener('click',

    function() {

        let authorization = false;
        const output = document.getElementById('output');
        const userName = document.getElementById('guestName').value;
        const userLastName = document.getElementById('guestLastName').value;
        let userAuthorized;

        if (userName.length === 0 || userLastName.length === 0) {
            output.innerHTML = "I campi non possono essere vuoti.";
        } else {
            
            for (let i = 0; i < guestList.length; i++) {
                if (userName + " " + userLastName === guestList[i]) {
                    userAuthorized = (userName + " " + userLastName);
                    authorization = true;
                }
            }
        
            if (authorization === true) {
                output.innerHTML = "Congratulazioni " + userAuthorized + ", sei in lista e puoi partecipare alla festa.";
            } else {
                output.innerHTML = "Ci dispiace " + userName + " " + userLastName + ", purtroppo non sei in lista e non puoi partecipare alla festa.";
            }
        }
    }
)