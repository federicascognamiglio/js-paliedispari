// DATI
const userWord = prompt("Dimmi una parola e ti dirò se è palindroma");

// ESECUZIONE LOGICA
let isPal = isPalindrome(userWord);
console.log(isPalindrome(userWord));


// OUTPUT
if (isPal) {
    console.log(`La parola ${userWord} è palidroma`);
} else {
    console.log(`La parola ${userWord} non è palidroma`);
}

// FUNZIONE
/** 
 * Funzione che, partendo da una parola, controlla se è palindroma 
 * @param {string} word
 * @returns {boolean}
**/

function isPalindrome(word) {
    let reverseWord = "";
    for (let i = word.length; i >= 0; i--) {
        const curChar = word[i];
        reverseWord += curChar;
        console.log(reverseWord);
    }
    let isPal = false;
    if (reverseWord === word) {
        isPal = true;
    }
    return isPal;
}