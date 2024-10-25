var contadorRespuestasCorrectas = 0;
var contadorRespuestasIncorrectas = 0;

const btnIzquierda = document.getElementById('izquierda');
const btnDerecha = document.getElementById('derecha');
const puntaje = document.getElementById('puntaje');
const mensaje = document.getElementById('mensaje');
const imagenBanana = document.getElementById('banana');
const imagenMani = document.getElementById('mani');
const imagenPina = document.getElementById('pina');
const imagenBanana2 = document.getElementById('banana2');
let botones = document.getElementById('botones');
let mensajeFinal = document.getElementById('mensajeFinal');

const imagenesFrutas = [
    '../../img/banana.png',
    '../../img/mani.png'

];

function mostrarFrutaAleatoria() {
  const indice = Math.floor(Math.random() * imagenesFrutas.length);
  const fruta = imagenesFrutas[indice];
  if (fruta === '../../img/banana.png') {
    // alert("banana");
      imagenBanana.style.visibility = "visible";
      imagenMani.style.visibility = "visible";
      imagenPina.style.visibility = "hidden";
      imagenBanana2.style.visibility = 'hidden';
  } else {
    // alert("mani");
      imagenBanana2.style.visibility = 'visible';
      imagenMani.style.visibility = 'hidden';
      imagenPina.style.visibility = 'visible';
      imagenBanana.style.visibility = 'hidden';

  }
  return indice; // devuelve el índice de la imagen mostrada
}

const respuestaCorrecta = {
  0: 'izquierda', // imagen de banana izquierda
  1: 'derecha' // imagen de banana2 derecha
};

function verificarRespuesta(respuestaUsuario, indiceImagen) {
  const respuestaEsperada = respuestaCorrecta[indiceImagen];
  if (respuestaUsuario === respuestaEsperada) {
    contadorRespuestasCorrectas++; // incrementar el contador de respuestas correctas
    // alert("¡Correcto!");
    mensaje.innerHTML="¡Correcto!";
    if (contadorRespuestasCorrectas === 3) {
      mensaje.style.display='none';
      mensajeFinal.style.display='block';
      mensajeFinal.innerHTML="!Correcto sigue trabajando! "+ contadorRespuestasCorrectas+"/3";
      puntaje.style.visibility='hidden';
      juego.style.display='none';
      contadorRespuestasCorrectas = 0;
      botones.style.display='block';
      //alert("¡Correcto! ahora regresemos al menu principal");
      //window.location.href = '../../evaluación/evaluacion.html'; // redireccionar a otro archivo
    }
  } else {
    // alert("Incorrecto, intenta de nuevo");
    mensaje.innerHTML="Incorrecto, intenta de nuevo";
    contadorRespuestasIncorrectas++;  

        if (contadorRespuestasIncorrectas >= 3 ) {
            mensaje.style.display='block'
            mensaje.innerHTML="¡Bien!, obtuviste "+respuestasCorrectas+" aciertos de 3, "+"sigue practicando para aumentar ese puntaje. <br> Elige otro escenario para seguir con tu evaluación";
            btnIzquierda.style.display='block'
            btnDerecha .style.display='block'
            mensaje.style.visibility='hidden';
            puntaje.style.visibility='hidden';
            juego.style.display='none';
            botones.style.display='block';

            contadorRespuestasIncorrectas = 0;
            contadorRespuestasCorrectas = 0;
        }
  }
  puntaje.innerHTML= contadorRespuestasCorrectas+"/3";

}

let indiceImagenActual = mostrarFrutaAleatoria();

btnIzquierda.addEventListener('click', function() {
    verificarRespuesta('izquierda', indiceImagenActual);
    indiceImagenActual = mostrarFrutaAleatoria(); // mostramos una nueva imagen aleatoria
});
  
btnDerecha.addEventListener('click', function() {
  verificarRespuesta('derecha', indiceImagenActual);
  indiceImagenActual = mostrarFrutaAleatoria(); // mostramos una nueva imagen aleatoria
});