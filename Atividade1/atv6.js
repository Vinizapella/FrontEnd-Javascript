/*
 Converter uma temperatura em Celsius para Fahrenheit.
 */

 const prompt = require("prompt-sync")();

 var temperatura = Number(prompt("Digite uma temporatura em Celsius para converter em Fahrenheit: "));

 temperatura = temperatura * 9/5 + 32;

    console.log(`A temperatura em Fahrenheit é ${temperatura}`);