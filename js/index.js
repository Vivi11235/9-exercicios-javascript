/*Questão 1 - Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o valor correspondente em graus Fahrenheit.*/

document.write('Questão 1:</br></br>');

let celsius = Number.parseFloat(prompt('Digite a temperatura em graus celsius:'));

let fahrenheit = celsius*1.8+32;

document.write(`A temperatura digitada em graus fahrenheit é: ${fahrenheit}.</br></br>`);