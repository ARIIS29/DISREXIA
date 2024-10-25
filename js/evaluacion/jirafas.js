let puntajeb = document.getElementById("puntajeb");
let bCount = 0;
let dCount = 0;
const countSpan = document.getElementById("count");

function playSound(letter) {
    // const audioElement = document.getElementById(`${letter}-audio`);
    // audioElement.play();

    switch (letter) {
        case 1:
            if (letter === 'ballena' || letter === 'bici' || letter === 'botas' || letter === 'buho1')
                bCount++;
            countSpan.innerHTML = bCount;
            alert("¡Correcto!");

            if (bCount >= 4) {
                alert("Felicidades, has identificado la letra 'b'.");
                // window.location.href = "./buscab.html";
            }
        break;
    }

    
    puntajeb.innerHTML = bCount;
    puntajed.innerHTML = dCount;

}