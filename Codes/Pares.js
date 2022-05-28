const prompt = require('prompt-sync')()
const numero = +prompt('digite um valor:')

resto = numero % 2
par = resto == 0
if (par) { console.log("O numero " + numero + " é par") } else { console.log("O numero " + numero + " é ímpar") }