/*Questão 4 - O custo de um carro novo ao consumidor é a soma do custo de
fábrica com a porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro, calcular e escrever o custo final ao consumidor.*/

document.write('Questão 4:</br></br>');

let custoFabrica = Number.parseFloat(prompt('Digite o custo de fábrica do carro:'));

let valorDist = (custoFabrica*28)/100;

let valorImposto = (custoFabrica*45)/100;

let custoFinal = custoFabrica + valorDist + valorImposto;

document.write(`O custo final ao consumidor desse carro é R$${custoFinal.toFixed(2)}.</br></br>`);

