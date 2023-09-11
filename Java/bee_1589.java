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

import java.io.IOException;
import java.util.Scanner; 

public class Main {
 
    public static void main(String[] args) throws IOException {
 
        Scanner sc = new Scanner(System.in);
            int qtd = sc.nextInt();
            
            for(int i = 0; i<qtd; i++){
                int a = sc.nextInt();
                int b = sc.nextInt();
                
                System.out.println( (a+b) );
            }
        sc.close();
 
    }
 
}
