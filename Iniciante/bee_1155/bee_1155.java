/*
  Escreva um algoritmo para calcular e escrever o valor de S, sendo S dado pela fórmula:
  S = 1 + 1/2 + 1/3 + … + 1/100

      ENTRADA
        Não há nenhuma entrada neste problema.

      SAÍDA
        A saída contém um valor correspondente ao valor de S.
        O valor deve ser impresso com dois dígitos após o ponto decimal.
*/

import java.io.IOException;
public class Main {
 
    public static void main(String[] args) throws IOException {
        float res = 0;
        for (float i = 1; i<=100; i++){
            res += 1/i;
        }
        
        System.out.printf("%.2f\n", res);
    }
}
