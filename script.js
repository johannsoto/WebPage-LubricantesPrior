document.addEventListener("DOMContentLoaded", function() {
    // Selección de elementos del DOM
    const menuBtn = document.querySelector(".menu-btn");
    const menu = document.querySelector(".menu");
    const logo = document.querySelector(".logo"); // Logo de la web

    if (!menuBtn || !menu || !logo) {
        console.error("⚠️ Elementos no encontrados en el DOM.");
        return;
    }

    // Evento para abrir/cerrar el menú
    menuBtn.addEventListener("click", function() {
        menu.classList.toggle("menu-active");
        logo.classList.toggle("logo-move"); // Mover el logo en menú activo

        // Cambiar ícono entre ☰ y ✖
        menuBtn.textContent = menu.classList.contains("menu-active") ? "✖" : "☰";
    });

    // Cierra el menú al hacer clic en un enlace y vuelve el logo a su posición original
    document.querySelectorAll(".menu a").forEach(item => {
        item.addEventListener("click", function() {
            menu.classList.remove("menu-active");
            logo.classList.remove("logo-move");
            menuBtn.textContent = "☰";
        });
    });
});

// Inicializar Swiper con efecto Coverflow
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    coverflowEffect: {
        rotate: 30, // Rotación de las imágenes
        stretch: 0,
        depth: 100, // Profundidad del efecto
        modifier: 1,
        slideShadows: true,
    },
    autoplay: {
        delay: 4500, // Cambio automático cada 4.5 segundos
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// Formulario de contacto con EmailJS
document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("-YDq2LY6mmU44YF79"); // Reemplaza con tu Public Key de EmailJS

    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Evita el recargo de la página

        // Capturar datos del formulario
        let nombre = document.getElementById("nombre").value;
        let email = document.getElementById("email").value;
        let mensaje = document.getElementById("mensaje").value;

        let parametros = {
            from_name: nombre,
            from_email: email,
            message: mensaje
        };

        // Envío del correo mediante EmailJS
        emailjs.send("service_lnvfi4a", "template_vcbdmkp", parametros)
            .then(function (response) {
                console.log("✅ Correo enviado con éxito", response);
                document.getElementById("status-message").innerText = "✅ ¡Mensaje enviado!";
                document.getElementById("contact-form").reset(); // Limpiar el formulario
            })
            .catch(function (error) {
                console.error("❌ Error al enviar el correo", error);
                document.getElementById("status-message").innerText = "❌ Error al enviar mensaje.";
            });
    });
});

