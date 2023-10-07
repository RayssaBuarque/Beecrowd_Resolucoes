/*
  BOB CONDUITE

  Você tem em mãos dois cabos circulares de energia. O primeiro cabo tem raio R1 e o segundo raio R2.
  Você precisa comprar um conduite circular (veja a imagem abaixo que ilustra um conduite) de maneira a passar os dois cabos por dentro dele:

  https://resources.beecrowd.com.br/gallery/images/problems/UOJ_1589.jpg

  Qual o menor raio do conduite que você deve comprar?
  Em outras palavras, dado dois círculos, qual o raio do menor círculo que possa englobar ambos os dois?

    ENTRADA
        Na primeira linha teremos um inteiro T (T ≤ 10000), indicando o número de casos de teste.
        Na única linha de cada caso teremos dois números inteiros R1 e R2, indicando os respectivos raios.
        Os inteiros serão positivos e todas as contas caberão em um inteiro normal de 32 bits.
    
    SAÍDA
        Em cada caso, imprima o menor raio possível em uma única linha
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

for (let i = 1; i<= Number(lines[0]); i++){
    let linha = lines[i].split(' ');

    console.log( (Number(linha[0]) + Number(linha[1])) );
}
