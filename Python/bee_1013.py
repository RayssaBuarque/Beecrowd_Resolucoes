'''
O MAIOR

Faça um programa que leia três valores e apresente o maior dos três valores lidos seguido da mensagem “eh o maior”.
Utilize a fórmula:

MaiorAB = (a + b + abs(a-b))/2

Obs.: a fórmula apenas calcula o maior entre os dois primeiros (a e b). Um segundo passo,
portanto é necessário para chegar no resultado esperado.

  ENTRADA:
    O arquivo de entrada contém três valores inteiros.

  SAÍDA:
    Imprima o maior dos três valores seguido por um espaço e a mensagem "eh o maior".
'''

# -*- coding: utf-8 -*-
entradas = input().split(' ')
nums = []

for i in range(0, len(entradas)):
    nums.append( int(entradas[i]) )

print(max(nums), 'eh o maior')
