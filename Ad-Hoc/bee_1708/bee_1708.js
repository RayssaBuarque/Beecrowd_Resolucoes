/*
    VOLTA

    No automobilismo é bastante comum que o líder de uma prova, em determinado momento, ultrapasse o último colocado.
    O líder, neste momento, está uma volta à frente do último colocado, que se torna, assim, um retardatário.
    Neste problema, dados os tempos que o piloto mais rápido e o piloto mais lento levam para completar uma volta,
    você deve determinar em que volta o último colocado se tornará um retardatário, ou seja, será ultrapassado pelo líder.
    Você deve considerar que, inicialmente, eles estão lado a lado, na linha de partida do circuito, ambos no início
    da volta de número 1 (a primeira volta da corrida); e que uma nova volta se inicia sempre depois que o líder cruza a
    linha de partida.

            ENTRADA:
                A única linha da entrada contém dois números inteiros X e Y (1 ≤ X < Y ≤ 10000), os tempos, em segundos,
                que o piloto mais rápido e o piloto mais lento levam para completar uma volta, respectivamente.

            SAÍDA:
                Seu programa deve produzir uma única linha, contendo um único inteiro: a volta em que o piloto mais lento
                se tornará um retardatário.
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

let rapido = Number(lines[0]);
let lento = Number(lines[1]);
            
if(lento<rapido){
    let temp = rapido;
    rapido = lento;
    lento = temp;
}

let roda = 0;
let count = 0;
while( Math.ceil(roda/lento) == roda/rapido){
    count++;
    roda += rapido;
}

console.log(count);