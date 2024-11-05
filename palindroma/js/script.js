// DATI
const userWord = prompt("Dimmi una parola e ti dirò se è palindroma","anna");

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
    for (let i = word.length -1; i >= 0; i--) {
        const curChar = word[i];
        reverseWord += curChar;
        console.log(reverseWord);
    }
    return (reverseWord === word);
}