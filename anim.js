// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Tengo tanto tanto que quiero darte", time: 13 },
  { text: "Tantos momentos, tantos suspiros para entregarte", time: 18 },
  { text: "Tengo tanto tanto muy dentro mío", time: 25 },
  { text: "Tantos latidos, tantas miradas llenan de amor al vacío", time: 31 },
  { text: "Tantos latidos, tantas miradas llenan de amor al vacío", time: 33 },
  { text: "Pero el tiempo se hace corto cada vez", time: 38 },
  { text: "En la espera no sé si es que habrá un después", time: 44 },
  { text: "Quiero que no acabe la noche", time: 51 },
  { text: "Que no acabe la noche, congelados en un beso sin final", time: 57 },
  {text: "Que no acabe la noche, congelados en un beso sin final", time: 59},
  { text: "Un eterno abrazo y un te quiero", time: 63 },
  { text: "Quiero que no acabe la noche", time: 68 },
  { text: "Que no acabe la noche", time: 69},
  { text: "Enamorados de esta fuerza irreal", time: 70 },
  { text: "Enamorados de esta fuerza irreal", time: 71 },
  { text: "Enamorados de esta fuerza irreal", time: 72 },
  { text: "Enamorados de esta fuerza irreal", time: 74 },
  { text: "Y que sepas lo que yo te puedo dar", time: 80 },
  { text: "Tengo tanto tanto fuego que quema", time: 97 },
  { text: "Tantos anhelos, tantos consuelos más que un poema", time: 102 },
  { text: "Tantos anhelos, tantos consuelos más que un poema", time: 104 },
  { text: "Pero tienes que marcharte ya lo sé", time: 110 },
  { text: "Aunque sé que pronto volveré a verte", time: 115 },
  { text: "No me basta, y quiero que no acabe la noche", time: 118 },
  { text: "No me basta, y quiero que no acabe la noche", time: 121},
  { text: "No me basta, y quiero que no acabe la noche", time: 123},
  { text: "Que no acabe la noche, congelados, en un beso sin final", time: 127 },
  { text: "Que no acabe la noche, congelados, en un beso sin final", time: 129 },
  { text: "Un eterno abrazo y un te quiero", time: 132 },
  { text: "Quiero que no acabe la noche", time: 135 },
  { text: "Quiero que no acabe la noche", time: 137 },
  { text: "Quiero que no acabe la noche", time: 138 },
  { text: "Que no acabe la noche, enamorados de esta fuerza irreal", time: 145 },
  { text: "Que no acabe la noche, enamorados de esta fuerza irreal", time: 147 },
  { text: "Y que sepas lo que yo te puedo dar", time: 151 },
  { text: "Hoy eres mío y de nadie más amor", time: 153 },
  { text: "Hoy eres mío y de nadie más amor", time: 156 },
  { text: "Hoy tengo frío y tú me das calor", time: 163 },
  { text: "Te deseo", time: 166 },
  { text: "Todo el tiempo no me basta", time: 168 },
  { text: "Todo el tiempo no me basta", time: 170},
  { text: "Quiero que no acabe la noche", time: 191 },
  { text: "Que no acabe la noche, enamorados de esta fuerza irreal", time: 196 },
  { text: "Que no acabe la noche, enamorados de esta fuerza irreal", time: 198 },
  { text: "Y que sepas lo que yo te puedo dar", time: 204 }, 
  { text: "Te amo Mi mochi", time: 204 },
  { text: "Te amo Mi mochi", time: 206 },
  { text: "Te amo Mi mochi", time: 208 },
];



// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 100);

//funcion titulo
// Función para ocultar el título después de 297 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 297
setTimeout(ocultarTitulo, 220000);
