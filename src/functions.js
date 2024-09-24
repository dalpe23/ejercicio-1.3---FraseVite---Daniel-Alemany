"use strict";

function letters(cadena) {
  let numero = cadena.length;
  return numero;
}

function words(cadena) {
  let palabras = cadena.split(" ");
  return palabras.length;
}

function upperString(cadena) {
  let mayusculas = cadena.toLocaleUpperCase();
  return mayusculas;
}

function titleString(cadena) {
  let array = cadena.split(" ");
  let palabraNueva = "";

  for (let palabra of array) {
    palabraNueva +=
      palabra.charAt(0).toLocaleUpperCase() + palabra.substring(1) + " ";
  }

  return palabraNueva.trim();
}

function backwardsLetters(cadena) {
  return cadena.split("").reverse().toString().replaceAll(",", "");
}

function backwardsWords(cadena) {
  return cadena.split(" ").reverse().toString().replaceAll(",", " ");
}

function palindrome(cadena) {
  let cadenaMinusculaSinEspacios = cadena
    .toLocaleLowerCase()
    .replaceAll(" ", "");
  let cadenaAlReves = cadenaMinusculaSinEspacios.split("").reverse().join(""); // .join() seria lo mismo que: toString().replaceAll(",", "");

  return cadenaMinusculaSinEspacios === cadenaAlReves;
}

export {
  letters,
  words,
  upperString,
  titleString,
  backwardsLetters,
  backwardsWords,
  palindrome,
};
