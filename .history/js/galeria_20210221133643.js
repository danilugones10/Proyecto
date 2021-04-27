const imagen = document.getElementById('imagen');
const texto = document.getElementById('nombreImagen');

let imagenes = ["css/img/imagenes/1.jpg","css/img/imagenes/2.jpg","css/img/imagenes/3.jpg","css/img/imagenes/4.jpg","css/img/imagenes/5.jpg","css/img/imagenes/6.jpg"]
let textos = ["Versace","Hugo Boss","Tommy Hilfiger","Balenciaga", "Gucci","Paisaje Congelado"]

const flecha1 = document.getElementById('flecha1');
const flecha2 = document.getElementById('flecha2');

let numero = 0;

// CADA 5 SEGUNDOS QUE AVANCE DE IMAGEN
setInterval(function(){ avanzar() }, 5000);

function avanzar() {
    if(numero == 5) {
       numero = 0;
       imagen.src = imagenes[numero];
       texto.textContent = textos[numero];
   }
    else {
       numero ++;
       imagen.src = imagenes[numero];
       texto.textContent = textos[numero];
   }
}

function retroceder() {
    if(numero == 0) {
       numero = 5;
       imagen.src = imagenes[numero];
       texto.textContent = textos[numero]
    }
    else {
       numero--;
       imagen.src = imagenes[numero];
       texto.textContent = textos[numero];
    }
}
flecha1.addEventListener('click', () => {
    retroceder()
})
flecha2.addEventListener('click', () => {
    avanzar()
}) 