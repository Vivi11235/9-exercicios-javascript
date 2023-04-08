/*Questão 2 - Crie um programa que peça um número de 1 a 7 e exiba o dia da
semana correspondente utilizando a estrutura condicional switch.*/

document.write('Questão 2:</br></br>');

let numero = Number.parseInt(prompt('Digite um número de 1 a 7:'));

switch(numero){
    case 1:
    document.write('O dia da semana correspondente ao número digitado é domingo.</br></br>');
    break;

    case 2: document.write('O dia da semana correspondente ao número digitado é segunda-feira.</br></br>');
    break;

    case 3: document.write('O dia da semana correspondente ao número digitado é terça-feira.</br></br>');
    break;

    case 4: document.write('O dia da semana correspondente ao número digitado é quarta-feira.</br></br>');
    break;

    case 5: document.write('O dia da semana correspondente ao número digitado é quinta-feira.</br></br>');
    break;

    case 6: document.write('O dia da semana correspondente ao número digitado é sexta-feira.</br></br>');
    break;

    case 7: document.write('O dia da semana correspondente ao número digitado é sábado.</br></br>');
    break;

    default:
    document.write('Opção inválida.</br></br>');
}