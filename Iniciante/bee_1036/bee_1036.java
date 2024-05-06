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

import java.io.IOException;
import java.util.Scanner;
import java.lang.Math;

public class Main{
    public static void main(String[] args) throws IOException{
        Scanner sc = new Scanner(System.in);
			String[] dados = sc.nextLine().split(" ");
			
				double a = Double.parseDouble(dados[0]);
				double b = Double.parseDouble(dados[1]);
				double c = Double.parseDouble(dados[2]);
            
        if(a == 0){
           System.out.print("Impossivel calcular\n"); 
        }
        
        else{
            double delta = (b*b) - (4*a*c);
            double x1 = ((0-b) - Math.sqrt(delta))/(2*a);
            double x2 = ((0-b) + Math.sqrt(delta))/(2*a);
            sc.close();
                
            if(delta<0){
                System.out.print("Impossivel calcular\n");
            }
            
            else{
                System.out.printf("R1 = %.5f\n", x2);
                System.out.printf("R2 = %.5f\n", x1); 
            }
	    }
    }
}
