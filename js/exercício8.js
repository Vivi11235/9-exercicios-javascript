/*Questão 8 - Faça um algoritmo que leia a idade e peso de um atleta e imprima
a sua categoria, de acordo com a seguinte tabela:

Idade                 Peso                Categoria
Até 12 anos -                             Infantil
13 a 16 anos         Até 40kg            Juvenil leve
                   Acima de 40kg         Juvenil pesado
17 a 24 anos         Até 45kg            Sênior leve
               Acima de 45kg  até 60kg   Sênior médio
                  Acima de 60kg          Sênior pesado
Acima de 24 anos -                       Veterano*/

document.write('Questão 8:</br></br>');

let idadeAtleta = Number.parseInt(prompt('Digite a idade do atleta:'));

let pesoAtleta = Number.parseFloat(prompt('Digite o peso do atleta:'));

if(idadeAtleta<=12){
        document.write(`O atleta está na categoria "Infantil".</br></br>`);
}else if(idadeAtleta>12&&idadeAtleta<=16){
    if(pesoAtleta<=40){
        document.write(`O atleta está na categoria "Juvenil leve".</br></br>`);
    }else{
        document.write(`O atleta está na categoria "Juvenil pesado".</br></br>`);
    }
}else if(idadeAtleta>=17&&idadeAtleta<=24){
    if(pesoAtleta<=45){
        document.write(`O atleta está na categoria "Sênior leve".</br></br>`);
    }else if(pesoAtleta>45&&pesoAtleta<=60){
        document.write(`O atleta está na categoria "Sênior médio".</br></br>`);
    }else{
        document.write(`O atleta está na categoria "Sênior pesado".</br></br>`);
    }
}else{
    document.write(`O atleta está na categoria "Veterano".</br></br>`);
}