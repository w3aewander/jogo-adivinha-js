var numero;
var maxtentativas = 7;
var divmaxtentativas = document.querySelector("#divmaxtentativas");
var tentativas;
var tempo;
var divtentativas = document.querySelector("#divtentativas");
var resultado = document.querySelector("#resultado");
var imagem = document.querySelector("#imagem");
divmaxtentativas.innerHTML = "<strong>" + maxtentativas + "</strong>";


function iniciarJogo() {

    tentativas = 0;
    tempo = 2000;
    
    document.querySelector("#palpite").value = "";
    
    numero = parseInt(Math.random() * 100);
    divtentativas.value = tentativas;
    resultado.innerHTML = "";
    resultado.style.color = "red";
    imagem.src = "img/play.gif";

   
}



function adivinha() {

    var acertou = false;
    var palpite = parseInt(document.querySelector("#palpite").value);
    
    resultado.innerHTML = "Calculando... aguarde";
    
    if (tentativas >= maxtentativas) {

        alert("Fim de jogo! Número máximo de tentativas, Você perdeu!!! ");
        resultado.style.color = "red";
        imagem.src = "img/errou.gif";

        setTimeout( function(){
            resultado.innerHTML = "O número era..: " + numero;
            imagem.src = "img/fim.gif";

        }, tempo);
        
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

function relogio(){

    var agora = new Date();
    var hoje = agora.getDate() + "/" + parseInt(agora.getMonth() + 1 ) + "/" + agora.getFullYear();
    var hora = agora.getHours() + ":" + agora.getMinutes() + ":" + agora.getSeconds();

    document.querySelector("#relogio").innerHTML =  hoje +" "+ hora ;
}

function mostraRelogio(){
    setInterval( function(){
        relogio();
    },1000);
}

