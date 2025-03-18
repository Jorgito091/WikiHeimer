
console.log("Página cargada con éxito.");
// Array de imágenes para el carrusel
const imagenesCarrusel = [
    "AssetsAkali/Akali_0.jpg",
    "AssetsAkali/Akali_1.jpg",
    "AssetsAkali/Akali_2.jpg",
    "AssetsAkali/Akali_3.jpg",
    "AssetsAkali/Akali_4.jpg",
    "AssetsAkali/Akali_5.jpg",
    "AssetsAkali/Akali_6.jpg",
    "AssetsAkali/Akali_7.jpg",
    "AssetsAkali/Akali_8.jpg",
    "AssetsAkali/Akali_9.jpg",
    "AssetsAkali/Akali_10.jpg",
    "AssetsAkali/Akali_11.jpg",
    "AssetsAkali/Akali_12.jpg",
    "AssetsAkali/Akali_13.jpg",
    "AssetsAkali/Akali_14.jpg",
    "AssetsAkali/Akali_15.jpg",
    "AssetsAkali/Akali_16.jpg",
    "AssetsAkali/Akali_17.jpg",
    "AssetsAkali/Akali_18.jpg",
   
    
    
];

let indiceCarrusel = 0;

// Función para cambiar la imagen del carrusel
function cambiarImagenCarrusel(direccion) {
    if (direccion === 'siguiente') {
        indiceCarrusel = (indiceCarrusel + 1) % imagenesCarrusel.length;
    } else if (direccion === 'anterior') {
        indiceCarrusel = (indiceCarrusel - 1 + imagenesCarrusel.length) % imagenesCarrusel.length;
    }

    const imagenCarrusel = document.getElementById('imagen-carrusel');
    imagenCarrusel.src = imagenesCarrusel[indiceCarrusel];
}

// Event listeners para los botones del carrusel
document.getElementById('siguiente-carrusel').addEventListener('click', () => cambiarImagenCarrusel('siguiente'));
document.getElementById('anterior-carrusel').addEventListener('click', () => cambiarImagenCarrusel('anterior'));

console.log("Página cargada con éxito.");