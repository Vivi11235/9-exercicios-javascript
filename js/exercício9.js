/*Questão 9 - Escreva um programa que pergunte a velocidade de um carro. 
Caso ultrapasse 80Km/h, exiba uma mensagem dizendo que o usuário foi 
multado. Nesse caso, exiba o valor da multa, cobrando R$5 por cada km 
acima da velocidade permitida.*/

document.write('Questão 9:</br></br>');

let velocidade = Number.parseFloat(prompt('Digite a velocidade do carro, em quilômetros por hora:'));

if(velocidade>80){
    let multa = (velocidade-80)*5;
    document.write(`Você foi multado em R$${multa}.`);
}else{
    document.write('Você está dentro do limite de velocidade por hora permitido.');
}