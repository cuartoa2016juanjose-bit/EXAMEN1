// ANIMACION EN EL BODY
const elementos = document.querySelectorAll("body *");

function checkAnimaciones() {
    elementos.forEach(el => {
        const rect = el.getBoundingClientRect();

        // entra en pantalla → animar
        if (rect.top < window.innerHeight - 100 && rect.bottom > 100) {
            el.classList.add("visible");
        }
        // sale de pantalla → quitar animación
        else {
            el.classList.remove("visible");
        }
    });
}

window.addEventListener("scroll", checkAnimaciones);
window.addEventListener("load", checkAnimaciones);



//DOCUMENTO
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

//Ubicacion
const ubicacion = document.querySelector(".ubicacion");

// Función que revisa si el elemento está en pantalla
function checkUbicacion() {
    const rect = ubicacion.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
        ubicacion.classList.add("visible");
    }
}

// Escuchar scroll
window.addEventListener("scroll", checkUbicacion);

// También revisa al cargar la página
window.addEventListener("load", checkUbicacion);