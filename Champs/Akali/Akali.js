console.log("Página cargada con éxito.");

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

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('anterior-carrusel').addEventListener('click', () => cambiarImagenCarrusel('anterior'));
    document.getElementById('siguiente-carrusel').addEventListener('click', () => cambiarImagenCarrusel('siguiente'));
});

let indiceCarrusel = 0;

function cambiarImagenCarrusel(direccion) {
    console.log('Dirección del carrusel:', direccion);  // Debugging
    if (direccion === 'siguiente') {
        indiceCarrusel = (indiceCarrusel + 1) % imagenesCarrusel.length;
    } else if (direccion === 'anterior') {
        indiceCarrusel = (indiceCarrusel - 1 + imagenesCarrusel.length) % imagenesCarrusel.length;
    }

    const imagenCarrusel = document.getElementById('imagen-carrusel');
    imagenCarrusel.src = imagenesCarrusel[indiceCarrusel];
}

function showContent(imageId) {
    const video = document.getElementById("video");
    const videoText = document.getElementById("video-text");

    let videoSrc = '';
    let textContent = '';

    switch (imageId) {
        case 1:
            videoSrc = 'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0084/ability_0084_P1.mp4';
            textContent = "Pasiva: Al momento de infligir daño de habilidades a un campeón se creará un anillo alrededor de este, al momento de golpear a un campeón con el anillo se infligirá daño adicional.";
            break;
        case 2:
            videoSrc = 'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0084/ability_0084_Q1.mp4';
            textContent = "Q: Akali lanza en forma de cono 5 shurikens que infligen daño según sus estadísticas de poder de ataque o poder de habilidad adicionales.";
            break;
        case 3:
            videoSrc = 'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0084/ability_0084_W1.mp4';
            textContent = 'W: Akali crea una ventana de humo la cual le regenera stamina y la hace indetectable para habilidades de point and click y ataques básicos.';
            break;
        case 4:
            videoSrc = 'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0084/ability_0084_E1.mp4';
            textContent = 'E: Akali realiza una voltereta hacia atrás y arroja un shuriken hacia delante marcando a enemigos y nubes de humo, al momento de relanzarla se desplaza hacia el objetivo marcado.';
            break;
        case 5:
            videoSrc = 'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0084/ability_0084_R1.mp4';
            textContent = 'R: Akali se desplaza hacia un objetivo infligiendo daño y al momento de relanzarla Akali se desplaza rápidamente haciendo daño de ejecución a los enemigos alcanzados.';
            break;
    }

    // Detener el video actual antes de cambiar la fuente
    video.pause();
    video.currentTime = 0;

    // Asignar la nueva fuente y mostrar el video
    video.src = videoSrc;
    video.style.display = 'block';
    videoText.textContent = textContent;

    // Reproducir el video automáticamente
    video.play();
}

function hideContent() {
    const video = document.getElementById("video");
    const videoText = document.getElementById("video-text");

    video.style.display = 'none';
    videoText.textContent = '';
}


const video = document.getElementById('video');
video.addEventListener('click', function (event) {
    event.preventDefault();
    video.play();
});
const data = [
    {
      
      img1:   "https://www.mobafire.com/images/reforged-rune/electrocute.png",
      img2: "https://source.unsplash.com/300x200/?forest",
      img3: "https://source.unsplash.com/300x200/?forest",
      img4: "https://source.unsplash.com/300x200/?forest",
      img5: "https://source.unsplash.com/300x200/?forest",
      img6: "https://source.unsplash.com/300x200/?forest",
      img7: "https://source.unsplash.com/300x200/?forest",
      img8: "https://source.unsplash.com/300x200/?forest",
      DescripcionRuna: "Bomboclat"
      
    },
    {
        
        img1: "https://source.unsplash.com/300x200/?nature",
        img2: "https://source.unsplash.com/300x200/?forest",
        img3: "https://source.unsplash.com/300x200/?forest",
        img4: "https://source.unsplash.com/300x200/?forest",
        img5: "https://source.unsplash.com/300x200/?forest",
        img6: "https://source.unsplash.com/300x200/?forest",
        img7: "https://source.unsplash.com/300x200/?forest",
        img8: "https://source.unsplash.com/300x200/?forest",
        DescripcionRuna: "Bomboclat2"
        
      },
      {
        
        img1: "https://source.unsplash.com/300x200/?nature",
        img2: "https://source.unsplash.com/300x200/?forest",
        img3: "https://source.unsplash.com/300x200/?forest",
        img4: "https://source.unsplash.com/300x200/?forest",
        img5: "https://source.unsplash.com/300x200/?forest",
        img6: "https://source.unsplash.com/300x200/?forest",
        img7: "https://source.unsplash.com/300x200/?forest",
        img8: "https://source.unsplash.com/300x200/?forest",
        DescripcionRuna: "Bomboclat3"  
        
      }
  ];

  function CambioRuna(index) {
  
    
    document.getElementById('Imagen1').src = data[index].img1;
    document.getElementById('Imagen2').src = data[index].img2;
    document.getElementById('Imagen3').src = data[index].img3;
    document.getElementById('Imagen4').src = data[index].img4;
    document.getElementById('Imagen5').src = data[index].img5;
    document.getElementById('Imagen6').src = data[index].img6;
    document.getElementById('Imagen7').src = data[index].img7;
    document.getElementById('Imagen8').src = data[index].img8;
    document.getElementById('DescripcionRuna').innerText = data[index].DescripcionRuna;

    for (let i = 1; i <= 8; i++) {
        const imgElement = document.getElementById(`Imagen${i}`);
        if (imgElement) {
            imgElement.style.display = 'inline-block';
        }
    }
}
  window.onload = function() {
    CambioRuna(0); 
  };
  