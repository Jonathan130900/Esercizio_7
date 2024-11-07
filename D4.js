/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('ESERCIZIO 1');

function area(l1, l2) {
    return l1 * l2;
};

console.log(area(8,4));

console.log('--------------------------------------------------------');

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('ESERCIZIO 2');

crazySum(7, 9)
function crazySum(first, second) {
    if (first !== second) {
        differentSum = first + second;
        console.log(differentSum);
    } else if (first === second) {
        equalSum = (first + second) * 3;
        console.log(equalSum)
    };
};

console.log('--------------------------------------------------------');

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('ESERCIZIO 3');

function crazyDiff(a) {
    if (a < 19) {
        return Math.abs(a - 19)
    } else if (a > 19){
        return Math.abs((a - 19) * 3)
    }
};

console.log(crazyDiff(20));

console.log('--------------------------------------------------------');

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('ESERCIZIO 4');

function boundary(numberBoundary) {
    if (numberBoundary >= 20 && numberBoundary <= 100 || numberBoundary === 400) {
        return true;
    } else {
        return false;
    };
};

console.log(boundary(78));

console.log('--------------------------------------------------------');

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('ESERCIZIO 5');

let string = 'EPICODE offre un sacco di corsi!';

function epify(string) {
    if (string.startsWith("EPICODE")) {
        return string;
    } else {
        return "EPICODE" + string;
    };
};

console.log(epify(string));

console.log('--------------------------------------------------------');

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('ESERCIZIO 6');

function check3and7(positiveNum) {
    if (positiveNum % 3 || positiveNum % 7) {
        return true;
    } else {
        return false;
    };
};

console.log(check3and7(28));

console.log('--------------------------------------------------------');

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('ESERCIZIO 7');

let stringaReverse = 'Godzilla mangia le centrali nucleari';

function reverseString(stringaReverse) {
    return stringaReverse.split('').reverse().join('');
};

console.log(reverseString(stringaReverse));

console.log('--------------------------------------------------------');

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('ESERCIZIO 8');

let maiuscStringa = 'nel cammin di nostra vita';

function upperFirst(maiuscStringa) {

    let parole = maiuscStringa.split(' ');

    for (let i = 0; i < parole.length; i++) {
        parole[i] = parole[i].charAt(0).toUpperCase() + parole[i].slice(1);
    }
    return parole.join(' ');  
};

console.log(upperFirst(maiuscStringa));

console.log('--------------------------------------------------------');

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('ESERCIZIO 9');

let stringaTagliata = 'Torino e dintorni';

function cutString(stringaTagliata) {
    return stringaTagliata.slice(1, stringaTagliata.length -1);
};

console.log(cutString(stringaTagliata))

console.log('--------------------------------------------------------');

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('ESERCIZIO 10');

let randomNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function giveMeRandom(randomNumber) {
    randomNumber = Math.floor(Math.random() * 10) + 1;
    return randomNumber;
};

console.log(giveMeRandom(randomNumber));