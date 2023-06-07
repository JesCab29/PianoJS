
//llamar a todas las clases .tecla
const piano_Teclas = document.querySelectorAll(".pianoTeclas .tecla");
//Cargar audio de carpeta sounds
let audio = new Audio("sounds/a.mp3");
//Función para cambiar el SRC del parámetro (tecla) y reproducir el sonido
const sonidoTecla = (tecla) => {
    audio.src = `sounds/${tecla}.mp3`;
    audio.play();
    //Detección de teclaPulsada y corrección de estilo con add y remove hover
    const teclaPulsada = document.querySelector(`[data-tecla=${tecla}]`);
    teclaPulsada.classList.add("hover"); 
    setTimeout(()=> { teclaPulsada.classList.remove("hover");
    }, 150);
    }
//
piano_Teclas.forEach(tecla =>{
    tecla.addEventListener("click", () => sonidoTecla(tecla.dataset.tecla));
})

const teclaPulsada = (e) => {
    sonidoTecla(e.key);
}

document.addEventListener("keydown", teclaPulsada);