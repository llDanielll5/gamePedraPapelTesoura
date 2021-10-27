var elementos = document.querySelectorAll('.player-options div > img');
var playerOpt = "";
var inimigoOpt = "";

function validarVitoria(){

    let vencedor = document.querySelector('.vencedor');

    if(playerOpt == "papel"){
        if(inimigoOpt == "papel"){
            vencedor.innerHTML = "O jogo Empatou!";
            vencedor.style.color = "#888";
        }else if(inimigoOpt == "pedra"){
            vencedor.innerHTML = "Jogador Venceu!";
            vencedor.style.color = "blue";
        }else if(inimigoOpt == "tesoura"){
            vencedor.innerHTML = "IA Venceu!";
            vencedor.style.color = "red";
        }
    }

    if(playerOpt == "pedra"){
        if(inimigoOpt == "papel"){
            vencedor.innerHTML = "IA Venceu!";
            vencedor.style.color = "red";
        }else if(inimigoOpt == "pedra"){
            vencedor.innerHTML = "O jogo Empatou!";
            vencedor.style.color = "#888";
        }else if(inimigoOpt == "tesoura"){
            vencedor.innerHTML = "Jogador Venceu!";
            vencedor.style.color = "blue";
        }
    }

    if(playerOpt == "tesoura"){
        if(inimigoOpt == "papel"){
            vencedor.innerHTML = "Jogador Venceu!";
            vencedor.style.color = "blue";
        }else if(inimigoOpt == "pedra"){
            vencedor.innerHTML = "IA Venceu!";
            vencedor.style.color = "red";
        }else if(inimigoOpt == "tesoura"){
            vencedor.innerHTML = "O jogo Empatou!";
            vencedor.style.color = "#888";
        }
    }

}

function resetInimigo(){
    const enemyOptions = document.querySelectorAll('.enemy-options div > img');
    for( var i =0; i < enemyOptions.length; i++){
        enemyOptions[i].style.opacity = 0.3;
    }
}

function inimigoJogar(){
    let rand = Math.floor(Math.random()*3);
    resetInimigo();
    const enemyOptions = document.querySelectorAll('.enemy-options div > img');

    for(var i=0; i < enemyOptions.length; i++){
        if(i == rand){
            enemyOptions[i].style.opacity = 1;
            inimigoOpt = enemyOptions[i].getAttribute('opt');
        }
    }

    validarVitoria();
    
}

function resetOpacityPlayer(){
    for (let i = 0; i < elementos.length; i++) {
        elementos[i].style.opacity = 0.3;
        
    }
}

for(var i = 0; i < elementos.length; i++){
    elementos[i].addEventListener('click', function(t){
        resetOpacityPlayer();
        t.target.style.opacity = 1;
        playerOpt = t.target.getAttribute('opt');

        inimigoJogar();
    });
}
