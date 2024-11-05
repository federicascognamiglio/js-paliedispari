// DATI
const evenOddUser = prompt("Pari o Dispari?", "Pari");
const userNum = parseInt(prompt("Scegli un numero da 1 a 5", "3"));
const computerNum = randomNum(1, 5);

// ESECUZIONE LOGICA
const summ = userNum + computerNum;
console.log(userNum, computerNum);
console.log(summ);

// OUTPUT
const numEven = evenOdd(summ);
const userChoice = capitalizeWord(evenOddUser);
if (numEven === userChoice) {
    console.log("Hai vinto! :)");
} else {
    console.log("Hai perso! :(");
}

// FUNZIONI
/** Funzione che genera un numero random
 * @param {number} min
 * @param {number} max
 * @returns {number}
*/

function randomNum(min, max) {
    return (Math.floor(Math.random() * (max - min) + min));
}

/** Funzione che definisce se un numero è pari o dispari
 * @param {number} number
 * @returns {boolean}
*/

function evenOdd(number) {
    if (number % 2 === 0) {
        return "Pari";
    } else {
        return "Dispari";
    }
}

/**
 * Funzione che partendo da una parola la rende Capitalizzata
 * @param {string} word
 * @returns {string}
 */

function capitalizeWord(word) {
    let result = "";
    for (let i = 0; i < word.length; i++) {
        let curChar = word[i];
        if (i === 0) {
            curChar = curChar.toUpperCase();
        }
    }
    const capitalized = word[0].toUpperCase() + word.substring(1);
    return capitalized;
}
