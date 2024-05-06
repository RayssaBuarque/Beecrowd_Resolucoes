/*
  FÓRMULA DE BHASKARA

  Leia 3 valores de ponto flutuante e efetue o cálculo das raízes da equação de Bhaskara.
  Se não for possível calcular as raízes, mostre a mensagem correspondente “Impossivel calcular”,
  caso haja uma divisão por 0 ou raiz de numero negativo.

      ENTRADA
        Leia três valores de ponto flutuante (double) A, B e C.

      SAÍDA
        Se não houver possibilidade de calcular as raízes, apresente a mensagem "Impossivel calcular".
        Caso contrário, imprima o resultado das raízes com 5 dígitos após o ponto,
        com uma mensagem correspondente conforme exemplo abaixo. Imprima sempre o final de linha após cada mensagem.
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var dados = lines[0].split(' ');

let a = Number(dados[0]);
let b = Number(dados[1]);
let c = Number(dados[2]);

if(a === 0){
    console.log("Impossivel calcular"); 
}

else{
    let delta = (b*b) - (4*a*c);
    let x1 = ((0-b) - Math.sqrt(delta))/(2*a);
    let x2 = ((0-b) + Math.sqrt(delta))/(2*a);
    
    if(delta<0){
        console.log("Impossivel calcular");
    }
    else{
        console.log("R1 = " + x2.toFixed(5));
        console.log("R2 = " + x1.toFixed(5)); 
    }
}
