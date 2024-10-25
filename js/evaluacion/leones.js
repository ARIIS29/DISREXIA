let correctAnswers = 0;
let respuestasCorrectas = 0;
const puntajeb = document.getElementById('puntajeb');
const puntajed = document.getElementById('puntajed');
const puntajep = document.getElementById('puntajep');
const puntajeq = document.getElementById('puntajeq');
const juego = document.getElementById('juego');
const mensajeFinal = document.getElementById('mensajeFinal');
const botones = document.getElementById('botones');
const botones2 = document.getElementById('botones2');

function checkAnswer() {
    let answerb = document.getElementById('answerb').value.toString();
    let answerd = document.getElementById('answerd').value.toString();
    let answerp = document.getElementById('answerp').value.toString();
    let answerq = document.getElementById('answerq').value.toString();

    if (answerb == '6') {
        puntajeb.innerHTML = answerb = "<img src='../../img/b.png'>"+"<img src='../../img/bien.gif'>";
        respuestasCorrectas++;
    } else if (answerb <= '6') {
        puntajeb.innerHTML = answerb = "<img src='../../img/b.png'>"+"<img src='../../img/mal.gif'>";
    } else {
        puntajed.innerHTML = answerd = "<img src='../../img/b.png'>"+"<img src='../../img/b.png'>"+"<img src='../../img/mal.gif'>";
    }


    if (answerd == '5') {
        puntajed.innerHTML = answerd = "<img src='../../img/d.png'>"+"<img src='../../img/bien.gif'>";
        respuestasCorrectas++;
    } else if (answerd <= '5') {
        puntajed.innerHTML = answerd = "<img src='../../img/d.png'>"+"<img src='../../img/mal.gif'>";
    } else {
        puntajed.innerHTML = answerd = "<img src='../../img/d.png'>"+"<img src='../../img/mal.gif'>";
    }

    if (answerp == '5') {
        puntajep.innerHTML = answerp = "<img src='../../img/p.png'>"+"<img src='../../img/bien.gif'>";
        respuestasCorrectas++;
    } else if(answerp <= '5') {
        puntajep.innerHTML = answerp = "<img src='../../img/p.png'>"+"<img src='../../img/mal.gif'>";
    } else {
        puntajep.innerHTML = answerp = "<img src='../../img/p.png'>"+"<img src='../../img/mal.gif'>"
    }

    if (answerq == '4') {
        puntajeq.innerHTML = answerq = "<img src='../../img/q.png'>"+"<img src='../../img/bien.gif'>";
        respuestasCorrectas++;
    } else if (answerq <= '4') {
        puntajeq.innerHTML = answerq = "<img src='../../img/q.png'>"+"<img src='../../img/mal.gif'>";
    } else {
        puntajeq.innerHTML = answerq = "<img src='../../img/q.png'>"+"<img src='../../img/mal.gif'>";
    }

    if (respuestasCorrectas === 4) {
        // alert("MUY BIEN")
        mensajeFinal.style.display='block'
        mensajeFinal.innerHTML="¡Muy bien, lograste identificar todas las letras! <br> ¡FELICIDADES!"
        juego.style.display='none'
        botones.style.display='block'
    }
    if (respuestasCorrectas < 4) {
        mensajeFinal.style.display='block'
        mensajeFinal.innerHTML="No lograste identificar todas las letras. <br> Pero no te desanimes te recomendamos seguir practicando para mejorar."
        juego.style.display='none'
        botones2.style.display='block'
    }

}

function cambiar_fondo_b(x) {
    if(x.style.background=="rgb(6, 155, 1)") {
        x.style.background="#00000071";
    }else {
        x.style.background="#069B01";
    }
    return false;
}

function cambiar_fondo_d(x) {
    if(x.style.background=="rgb(1, 136, 155)") {
        x.style.background="#00000071";
    }else {
        x.style.background="#01889B";
    }
    return false;
}

function cambiar_fondo_p(x) {
    if(x.style.background=="rgb(243, 21, 21)") {
        x.style.background="#00000071";
    }else {
        x.style.background="#F31515";
    }
    return false;
}

function cambiar_fondo_q(x) {
    if(x.style.background=="rgb(216, 21, 243)") {
        x.style.background="#00000071";
    }else {
        x.style.background="#D815F3";
    }
    return false;
}