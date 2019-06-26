# jogo-adivinha-js
Jogo de adivinhar número sorteado randomicamente pelo javascript


## Como funciona
O jogador inicialmente deve clicar no botão iniciar jogo para resetar os parâmetros do jogo para os valores iniciais, digitar um número entre 0 e 100 no campo palpite e em seguida clicar em jogar. A lógica do jogo está programada no arquivo javascript externo no diretório *js* e o arquivo html principal é o *jogo.html*.

## Regra do jogo
> Deve-se escolher um número entre 0 e 100.
> É permitido apenas três tentativas de acerto.
> Caso o jogador acerte o palpite durante as tentativas o jogo se encerrará exibindo ao usuário que ele acertou.

## Informações gráficas
A imagem lateral será alterada de acordo com a resposta do palpite. No inicio do jogo a imagem será  *play*, ao clicar no botão "Iniciar Jogo" a imagem será *cerebro1.gif* caso perca será exibida imagem *errou.gif* ou se acertar o palpite a imagem será *acertou.gif*. So terminar o jogo, a imagem será *fim.gif*. 

## Estrutura de diretórios

*jogo.html
*img/play.gif
*img/acertou.gif
*img/errou.gif
*img/fim.gif
*img/cerebro1.gif
*js/jogo.js

