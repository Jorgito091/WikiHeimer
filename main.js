const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

// Smooth Scroll para los enlaces internos
document.getElementById("1").addEventListener("click", function(event) {
    event.preventDefault(); 
    window.location.href = "Champs/Akali/Akali.html";  
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); 
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' 
        });
    });
});

// Botón para abrir y cerrar el menú
menuBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
});

// Cerrar menú cuando haces clic fuera de él
document.addEventListener("click", function () {
    menu.style.display = "none";
});

menu.addEventListener("click", function (event) {
    event.stopPropagation();
});

    

