import { letters, words, upperString, titleString, backwardsLetters, backwardsWords, palindrome } from './src/functions.js'


document.querySelector('#app').innerHTML = '<p>Abre la consola</p>';

"use strict";

let frase = prompt("Dime tu frase");

console.log(letters(frase));

console.log(words(frase));

console.log(upperString(frase));

console.log(titleString(frase));

console.log(backwardsLetters(frase));

console.log(backwardsWords(frase));

console.log(palindrome(frase));