/* Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero. */

const confirmButton = document.querySelector('button');

confirmButton.addEventListener('click',
    function () {

        let totalNumber = 0;
        const userNumber = document.getElementById('userNumber').value;
        const output = document.getElementById('output');
        
        if ((isNaN(userNumber)) || (userNumber < 0)) {
            output.innerHTML = "Hai inserito un valore non valido.";
        } else if (userNumber.length != 4) {
            output.innerHTML = "Il numero inserito non ha 4 cifre.";
        } else {
        
            for (let i = 0; i < userNumber.length; i++) {
                totalNumber += parseInt(userNumber.charAt(i));
            }
            
            output.innerHTML = "La somma delle cifre del numero " + userNumber + " è " + totalNumber;
        }
    }
)