/* Il software deve chiedere per 10 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. */

const startButton = document.querySelector('button');
let numberList = document.querySelector('div.results');

startButton.addEventListener('click',
    function () {
        numberList.innerHTML = " ";
        let totalNumber = 0;

        for (let i = 1; i <= 10; i++) {
            let userNumber = parseInt(prompt("Inserisci il " + i + "° numero"));
            if (isNaN(userNumber) || (userNumber < 0)) {
                numberList.innerHTML += "<p> Il " + i + "° numero inserito non è valido.</p>";
                userNumber = 0;
            } else {
                numberList.innerHTML += "<p> Il " + i + "° numero inserito è " + userNumber + ".</p>";
            }
            totalNumber += userNumber;
        }
    
        numberList.innerHTML += "<p> La somma dei numeri inseriti è " + totalNumber + ".</p>";
    }
)