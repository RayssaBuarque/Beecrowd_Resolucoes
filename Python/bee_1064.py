'''
POSITIVOS E MÉDIA

Leia 6 valores. Em seguida, mostre quantos destes valores digitados foram positivos.
Na próxima linha, deve-se mostrar a média de todos os valores positivos digitados, com um dígito após o ponto decimal.

  ENTRADA:
    A entrada contém 6 números que podem ser valores inteiros ou de ponto flutuante.
    Pelo menos um destes números será positivo.

  SAÍDA:
    O primeiro valor de saída é a quantidade de valores positivos.
    A próxima linha deve mostrar a média dos valores positivos digitados.
'''

valores = [float(input()), float(input()), float(input()), float(input()), float(input()), float(input())]
count = 0
soma = 0

for i in range(0, 6):
    if valores[i]>0:
        count+= 1
        soma += valores[i]
        
print(count, 'valores positivos')
print('%.1f' % (soma/count) )

#Desenvolvido por Rayssa Buarque 
