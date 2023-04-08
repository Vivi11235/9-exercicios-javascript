/* Questão 3 - Crie um programa que peça um número e verifique se ele é positivo, negativo ou zero.*/

document.write('Questão 3:</br></br>');

let number = Number.parseFloat(prompt('Digite um número:'));

if(number>0){
    document.write(`O número ${number} é positivo.</br></br>`);
}else if(number<0){
    document.write(`O número ${number} é negativo.</br></br>`);
}else{
    document.write(`O número digitado é zero.</br></br>`);
}