'''
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
'''

import math
dados = input().split(' ')

a = float(dados[0])
b = float(dados[1])
c = float(dados[2])
    
if a == 0:
    print('Impossivel calcular')
else:
    delta = (b*b) - (4*a*c)
    raiz =  delta**(1/2)
    x1 = ((0-b) - raiz)/(2*a)
    x2 = ((0-b) + raiz)/(2*a)
    
    if delta<0:
        print('Impossivel calcular')
    else:
        print('R1 = %.5f' % x2)
        print('R2 = %.5f' % x1)
