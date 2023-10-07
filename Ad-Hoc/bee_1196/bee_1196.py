'''
WERTYU

Um erro comum de digitação é colocar as mãos no teclado uma posição à direita da correta posição.
Desta forma, "Q" é digitado como "W" e "J" é digitado como "K" e assim por diante.
Você deve decodificar a mensagem desta maneira.

      ENTRADA:
          A entrada consiste em várias linhas de texto. Cada linha pode conter dígitos, espaços e letras maiúsculas.
          (exceto Q, A, Z), ou pontuação, exceto crase (`) conforme mostrado acima.
          Teclas rotuladas como palavras [Tab, BackSp, Control, etc.] não são representados na entrada.
          Você deverá repassar cada letra ou símbolo de pontuação pelo símbolo imediatamente à esquerda.
          Os espaços de entrada simplesmente deverão ser ecoados (impressos) na saída. 

      SAÍDA:
          Para cada linha de entrada, imprima uma linha de saída correspondente com a mensagem decodificada.
'''

teclado = '`1234567890-=QWERTYUIOP[]\\ASDFGHJKL;\'ZXCVBNM,./'

while True:
    try:
        cod = input()
        msg = ''
    
        for i in cod:
            if i == ' ':
                msg += i
            else:
                msg += teclado[teclado.index(i) - 1]
        print(msg)
    except EOFError:
        break;
