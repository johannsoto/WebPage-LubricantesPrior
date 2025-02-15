document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.querySelector(".menu-btn");
    const menu = document.querySelector(".menu");
    const logo = document.querySelector(".logo"); // Seleccionamos el logo

    if (!menuBtn || !menu || !logo) {
        console.error("⚠️ Elementos no encontrados en el DOM.");
        return;
    }

    menuBtn.addEventListener("click", function() {
        menu.classList.toggle("menu-active");
        logo.classList.toggle("logo-move"); // Agregamos la clase para mover el logo

        // Cambia el ícono entre ☰ y ✖
        menuBtn.textContent = menu.classList.contains("menu-active") ? "✖" : "☰";
    });

    // Cierra el menú al hacer clic en un enlace y vuelve el logo a su posición original
    document.querySelectorAll(".menu a").forEach(item => {
        item.addEventListener("click", function() {
            menu.classList.remove("menu-active");
            logo.classList.remove("logo-move"); // Volvemos el logo a su posición original
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

