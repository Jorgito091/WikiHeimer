
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");






document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); 
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' 
        });
    });
});

menuBtn.addEventListener("click", function (event) {
    event.stopPropagation(); 
    if (menu.style.display === "block") {
        menu.style.display = "none"; 
    } else {
        menu.style.display = "block"; 
    }
});


document.addEventListener("click", function () {
    menu.style.display = "none";
});


menu.addEventListener("click", function (event) {
    event.stopPropagation(); 
});
