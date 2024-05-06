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

#include <stdio.h>
#include <math.h>

int main(){
    double a;
    double b;
    double c;

    scanf("%lf %lf %lf", &a, &b, &c);

    double delta = (b*b)-(4*a*c);

    if (delta < 0 || 2*a == 0){
        printf("Impossivel calcular\n");
    }
    else{
        double x1 = ((0-b) + sqrt(delta))/(2*a);
        double x2 = ((0-b) - sqrt(delta))/(2*a);

        printf("R1 = %.5lf\nR2 = %.5lf\n", x1, x2);
    }

    return 0;

}
