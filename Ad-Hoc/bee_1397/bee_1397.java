/*
JOGO DO MAIOR!

Og gosta muito de brincar com seus filhos.
Seu jogo preferido é o jogo do maior, de autoria própria.
Este passatempo (no tempo das cavernas se tinha muito tempo disponível para jogos) é jogado em dupla, Og e um dos seus filhos.

O jogo procede da seguinte forma: os dois participantes escolhem um número de rodadas e, a cada rodada,
cada participante diz um número de 0 até 10 em voz alta, sendo que o participante que falar o número mais alto ganha um ponto
(em caso de empate, ninguém ganha o ponto).
No final das rodadas, os pontos são contabilizados e o participante com o maior número de pontos ganha.

Og e seus filhos gostam muito do jogo, mas se perdem na contagem dos pontos.
Você conseguirá ajudar Og a verificar a pontuação de uma lista de jogos?

      ENTRADA:
          A entrada é composta por vários casos de teste (partidas).
          Cada caso é iniciado com um inteiro N (de 0 até 10) representando o número de rodadas da partida,
          sendo que o valor 0 representa o final da entrada e não deve ser processado.
          Cada uma das próximas N linhas contém dois inteiros, A e B, onde A é o número escolhido pelo primeiro jogador
          e B é o número escolhido pelo segundo jogador (0 ≤ A, B ≤ 10).

      SAÍDA:
          A saída deve ser composta por uma linha por caso de teste, contendo o número de pontos de cada jogador, separados por um espaço.
*/

import java.io.IOException;
import java.util.Scanner; 

public class Main {
    public static void main(String[] args) throws IOException {
 
        Scanner sc = new Scanner(System.in);
        
        while(true){
            int rodadas = sc.nextInt();
            if (rodadas == 0){
                break;
            }
            
            int a = 0;
            int b = 0;
            
            for(int i = 0; i<rodadas; i++){
                int nA = sc.nextInt();
                int nB = sc.nextInt();
                
                if(nA>nB){
                    a++;
                }else if(nB>nA){
                    b++;
                }
            }
            
            System.out.println(a + " " + b);
        }  
        sc.close();
    }
}