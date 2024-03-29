/*
  AS DUAS TORRES

  Saruman, o Branco, um grande mago da Terra-média, traiu os bons costumes e se filiou ao lorde do mal, Sauron.
  Sauron comanda a torre de Minas Morgul, que abriga um dos seus mais temidos servos, o Rei Bruxo de Angmar, um dos Nazgûl
  (antigos reis humanos que foram corrompidos pelos poderes dos anéis de Sauron).
  Saruman comanda a torre de Orthanc, onde cria seus servos Uruk-hai, orcs mais terríveis que os convencionais.
  Para comunicação, eles utilizam as relíquias esféricas chamadas Palantír, que ficam no topo de suas torres.
  A Terra-média avança cada vez mais em tecnologia, muito impulsionada pelas guerras que a acometem diariamente.
  Um dos problemas que tem atrapalhado sua população é a Interferência de Comunicação Mágica (ICM).
  Os estudiosos de Minas Tirith, grande cidadela de Gondor, concluíram que para calcular o ICM para Palantír’s,
  basta dividir a distância entre os dois Palantír’s, pela soma do diâmetro dos mesmos.
  Gandalf, o Cinza, chegou a questionar essa conclusão, alegando que ela não fazia muito sentido, mas ele mesmo concluiu que dar sentido às coisas não faz sentido.
  Saruman e Sauron precisam de uma comunicação estável, pois têm medo que Frodo e seus amigos consigam atrapalhar seus planos,
  portanto, querem saber quanto de ICM há na comunicação de seus Palantír’s, para que saibam quanto de magia devem empregar na comunicação.

    ENTRADA
        A entrada é composta por 3 inteiros, N(0 < N < 10000), X e Y(0 < X, Y < 100), que indicam, respectivamente,
        a distância entre os Palantír, o diâmetro do Palantír de Sauron e o diâmetro do Palantír de Saruman.

    SAÍDA
        Um valor real indicando o ICM da comunicação dos Palatír de Sauron e Saruman, com 2 casas decimais.
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var linha = lines[0].split(' ')

let distancia = Number(linha[0])
let diametro_Sauron = Number(linha[1])
let diametro_Saruman = Number(linha[2])

console.log( (distancia/(diametro_Sauron + diametro_Saruman)).toFixed(2) );
