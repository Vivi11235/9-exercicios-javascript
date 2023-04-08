/* Questão 6 - Escreva um algoritmo que solicite 2 números e uma operação
matemática. O algoritmo deve realizar o cálculo com os 2 números digitados 
conforme a operação informada.*/

document.write('Questão 6:</br></br>');

let numero1 = Number.parseFloat(prompt('Digite o primeiro número.'));

let numero2 = Number.parseFloat(prompt('Digite o segundo número.'));

let operacao = prompt('Digite a operação matemática a ser realizada com os números informados: "multiplicação", "divisão", "soma", ou "subtração".');

let resultado;

switch(operacao){
    case 'multiplicação':
        resultado=numero1*numero2;
        document.write(`O resultado da operação informada é ${resultado}.</br></br>`);
    break;

    case 'divisão':
        resultado=numero1/numero2;
        document.write(`O resultado da operação informada é ${resultado}.</br></br>`);
        break;

    case 'soma':
        resultado=numero1+numero2;
        document.write(`O resultado da operação informada é ${resultado}.</br></br>`);
        break;

    case 'subtração':
        resultado=numero1-numero2;
        document.write(`O resultado da operação informada é ${resultado}.</br></br>`);
        break;
    
    default:
        document.write('Opção inválida.</br></br>')
}