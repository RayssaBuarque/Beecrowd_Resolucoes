/*
VALIDAÇÃO DE NOTA

Faça um programa que leia as notas referentes às duas avaliações de um aluno.

Calcule e imprima a média semestral.
Faça com que o algoritmo só aceite notas válidas (uma nota válida deve pertencer ao intervalo [0,10]).
Cada nota deve ser validada separadamente.

  ENTRADA:
    A entrada contém vários valores reais, positivos ou negativos.
    O programa deve ser encerrado quando forem lidas duas notas válidas.

  SAÍDA:
    Se uma nota inválida  for lida, deve ser impressa a mensagem "nota invalida".
    Quando duas notas válidas forem lidas, deve ser impressa a mensagem "media = " seguido do valor do cálculo.
    O valor deve ser apresentado com duas casas após o ponto decimal.
*/

var notas = [];
var count = 0;

while(notas.length < 2){
    let nota = Number(lines[count]);
    
    if(nota>=0 && nota<=10){
        notas.push(nota);
    }
    else{
        console.log('nota invalida');
    }
    count++;
}

console.log(`media = ${((notas[0] + notas[1])/2).toFixed(2)}`);
