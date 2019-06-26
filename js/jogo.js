var numero;
var tentativas;
var tempo;
var divtentativas = document.querySelector("#divtentativas");
var resultado = document.querySelector("#resultado");
var imagem = document.querySelector("#imagem");

function iniciarJogo() {

    tentativas = 0;
    tempo = 2000;
    document.querySelector("#palpite").value = "";

    numero = parseInt(Math.random() * 100);
    divtentativas.value = tentativas;
    resultado.innerHTML = "";
    imagem.src = "img/play.gif";
}

function adivinha() {

    var acertou = false;
    var palpite = parseInt(document.querySelector("#palpite").value);

    resultado.innerHTML = "Calculando... aguarde";

    if (tentativas >= 3) {

        alert("Fim de jogo! Número máximo de tentativas, Você perdeu!!! ");
        resultado.style.color = "red";
        resultado.innerHTML = "O número era..: " + numero;
        imagem.src = "img/fim.gif";
        return false;
    }

    imagem.src = "img/cerebro1.gif";

    if (palpite < numero) {


        setTimeout(function () {
            resultado.innerHTML = "O número que você escolheu é menor que o meu número, tente novamente!";
        }, tempo);

    } else if (palpite > numero) {
        setTimeout(function () {
            resultado.innerHTML = "O número que você escolheu é maior que o meu número, tente novamente!";
        }, tempo);


    } else {
        if (palpite === numero) {
            acertou = true;
            resultado.style.color = "green";
            resultado.innerHTML = "Parabéns, você acertou!!!";
            imagem.src = "img/acertou.gif";

            return true;
        }
        return false;
    }

    tentativas++;
    divtentativas.value = tentativas;
}


