var objetos = [   
    {  
       nombre: "pingüino",        
        imagen: "../../img/pinguino.png",        
        audio: "../../ejercicios/sonidos/biblioteca.mp3",        
        respuesta: "pingÜino",        
        incorrectas: ["qingÜino", "dingÜino", "bingÜino"]
   },
   {
       nombre: "bufanda",
       imagen: "../../img/bufanda.png",
       audio: "../../ejercicios/sonidos/buho.mp3",
       respuesta: "bufanda",
       incorrectas: ["pufanda", "dufanda", "qufanda"]
   },
   {
       nombre: "perro",
       imagen: "../../img/perro-nieve.png",
       audio: "../../ejercicios/sonidos/barco.mp3",
       respuesta: "perro",
       incorrectas: ["berro", "derro", "qerro"]
   },
   {
       nombre: "abeja",
       imagen: "../../ejercicios/imagenes/abeja.png",
       audio: "../../ejercicios/sonidos/abeja.mp3",
       respuesta: "abeja",
       incorrectas: ["adeja", "apeja", "aqega"]
   },
   {
       nombre: "copo",
       imagen: "../../img/copo.png",
       audio: "../../ejercicios/sonidos/bombilla.mp3",
       respuesta: "copo",
       incorrectas: ["codo", "cobo", "coqo"]
   },
   {
       nombre: "queso",
       imagen: "../../img/queso..png",
       audio: "../../ejercicios/sonidos/queso.mp3",
       respuesta: "queso",
       incorrectas: ["pueso", "bueso", "dueso"]
   },
   {
    nombre: "dado",
    imagen: "../../img/dado.png",
    audio: "../../ejercicios/sonidos/queso.mp3",
    respuesta: "dado",
    incorrectas: ["babo", "pado", "qapo"]
    },
];

var indiceObjetoActual = 0;
var respuestasCorrectas = 0;
var contadorRespuestasIncorrectas = 0;
let puntaje = document.getElementById("puntaje");
let mensaje = document.getElementById("mensaje");
let mensajeFinal = document.getElementById("mensajeFinal");
let juego = document.getElementById("juego");
let botones = document.getElementById("botones");

function reproducirAudio() {
	var audio = new Audio("../sonidos/buscab.mp3");
	audio.play();
}

function seleccionarObjetoAleatorio() {
	var indice = Math.floor(Math.random() * objetos.length);
	var objeto = objetos[indice];
	indiceObjetoActual = indice;
	return objeto;
}


function mostrarObjeto(objeto) {
  var objetoEl = document.getElementById("objeto");
  objetoEl.style.backgroundImage = "url(" + objeto.imagen + ")";

  var audio = new Audio(objeto.audio);

  objetoEl.onclick = function() {
    audio.play();
  };
}

function mostrarOpciones(objeto) {
	var opcionesEl = document.getElementById("opciones");
	var respuestasIncorrectas = objeto.incorrectas.filter(function(respuesta) {
		return respuesta !== objeto.respuesta;
	});
	respuestasIncorrectas = shuffle(respuestasIncorrectas);
	respuestasIncorrectas.length = 3;
	var opciones = [objeto.respuesta].concat(respuestasIncorrectas);
	opciones = shuffle(opciones);
	var opcionEls = document.getElementsByClassName("opcion");
	for (var i = 0; i < opcionEls.length; i++) {
		opcionEls[i].innerHTML = opciones[i];
	}
}

function verificarRespuesta(opcionEl) {
    var respuesta = opcionEl.innerHTML;
    var objeto = objetos[indiceObjetoActual];
    if (respuesta === objeto.respuesta) {
        respuestasCorrectas++;
        // alert("¡Correcto!");
        mensaje.innerHTML="¡Correcto!";
        if (respuestasCorrectas === 5) {
            // alert("¡Correcto! Pasas al siguiente nivel.");
            mensajeFinal.style.display='block'
            mensajeFinal.innerHTML="¡Bien hecho! obtuviste todos los aciertos. ¡¡FELICIDADES!! <br> Elige otro escenario para seguir con tu evaluación:";
            botones.style.display='block';
            mensaje.style.visibility='hidden';
            puntaje.style.visibility='hidden';
            juego.style.display='none';
            // window.location.href = "./completab.html";
            respuestasCorrectas = 0;
        }
    } else {
        // alert("Incorrecto, intenta de nuevo");
        mensaje.innerHTML="Incorrecto, intenta de nuevo";
        contadorRespuestasIncorrectas++;  

        if (contadorRespuestasIncorrectas > 5) {
            mensajeFinal.style.display='block'
            mensajeFinal.innerHTML="¡Bien!, obtuviste "+respuestasCorrectas+" aciertos de 5, "+"sigue practicando para aumentar ese puntaje. <br> Elige otro escenario para seguir con tu evaluación";
            botones.style.display='block'
            mensaje.style.visibility='hidden';
            puntaje.style.visibility='hidden';
            juego.style.display='none';

            contadorRespuestasIncorrectas = 0;
            respuestasCorrectas = 0;
        }
    }
    var objetoNuevo = seleccionarObjetoAleatorio();
    mostrarObjeto(objetoNuevo);
    mostrarOpciones(objetoNuevo);
    puntaje.innerHTML = respuestasCorrectas+"/5";
}


function shuffle(array) {
	for (var i = array.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	return array;
}

var objetoInicial = seleccionarObjetoAleatorio();
mostrarObjeto(objetoInicial);
mostrarOpciones(objetoInicial);