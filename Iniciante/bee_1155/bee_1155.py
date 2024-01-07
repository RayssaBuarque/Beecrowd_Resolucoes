'''
  Escreva um algoritmo para calcular e escrever o valor de S, sendo S dado pela fórmula:
  S = 1 + 1/2 + 1/3 + … + 1/100

      ENTRADA
        Não há nenhuma entrada neste problema.

      SAÍDA
        A saída contém um valor correspondente ao valor de S.
        O valor deve ser impresso com dois dígitos após o ponto decimal.
'''

res = 0

for i in range(1, 101):
    res += 1/i

print(round(res,2))
