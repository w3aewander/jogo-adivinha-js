var numero;
var maxtentativas = 0;
var divmaxtentativas = document.querySelector("#divmaxtentativas");
var tentativas;
var tempo;
var divtentativas = document.querySelector("#divtentativas");
var resultado = document.querySelector("#resultado");
var imagem = document.querySelector("#imagem");

document.querySelector("#divpalpite").style.display = "none";
document.querySelector("#modojogo").value = "0";
divmaxtentativas.innerHTML = "<strong>" + maxtentativas + "</strong>";

document.write("<audio src='https://archive.org/details/geometry_dash_1.9/Geometry+Dash+OST/Xstep.mp3' controls preload=auto hidden=true loop=true></audio>");

function iniciarJogo() {

    if ( maxtentativas == 0 ){
        alert("Escolha um modo de jogo.");
        return;
    }
    tentativas = 1;
    tempo = 5000;
    
    document.querySelector("#palpite").value = "";
    
    numero = parseInt(Math.random() * 100);
    divtentativas.value = tentativas;
    resultado.innerHTML = "";
    resultado.style.color = "red";
    imagem.src = "img/play.gif";

    document.querySelector("#iniciarjogo").setAttribute("disabled",1);
    document.querySelector("#divpalpite").style.display = "block";

   
}



function adivinha() {

    var acertou = false;
    var palpite = parseInt(document.querySelector("#palpite").value);

    if ( palpite <= 0 || palpite > 100){
        document.querySelector("#mensagem").innerHTML = "<strong>Selecione um número entre 0 e 100 inclusive.</strong>";
        return;
    }
    
    resultado.innerHTML = "Calculando... aguarde";
    
    if (tentativas >= maxtentativas) {

        document.querySelector("#mensagem").innerHTML ="<strong>Fim de jogo! Número máximo de tentativas, Você perdeu!!!</strong>";
        resultado.style.color = "red";
        imagem.src = "img/errou.gif";

        setTimeout( function(){
            resultado.innerHTML = "O número era..: " + numero;
            imagem.src = "img/fim.gif";

        }, tempo);
        
        document.querySelector("#palpite").value="";
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

    if (acertou || tentativas == maxtentativas ){
        document.querySelector("#iniciarjogo").removeAttribute("disabled");
        
    }
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

function alteraModoJogo(el){
   maxtentativas = parseInt(el.value);
   divmaxtentativas.innerHTML = "<strong>" + maxtentativas + "</strong>";
   iniciarJogo();
}
