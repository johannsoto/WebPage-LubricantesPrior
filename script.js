/**
 * Autor: Johann Alexander Soto Hernández
 * Fecha: 18/03/2025
 * Descripción: funcionalidad de la página web.
 */
document.addEventListener("DOMContentLoaded", function() {
   
    const menuBtn = document.querySelector(".menu-btn");
    const menu = document.querySelector(".menu");
    const logo = document.querySelector(".logo");

    if (!menuBtn || !menu || !logo) {
        console.error("⚠️ Elementos no encontrados en el DOM.");
        return;
    }

    
    menuBtn.addEventListener("click", function() {
        menu.classList.toggle("menu-active");
        logo.classList.toggle("logo-move"); 

        
        menuBtn.textContent = menu.classList.contains("menu-active") ? "✖" : "☰";
    });

    
    document.querySelectorAll(".menu a").forEach(item => {
        item.addEventListener("click", function() {
            menu.classList.remove("menu-active");
            logo.classList.remove("logo-move");
            menuBtn.textContent = "☰";
        });
    });
});


var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    coverflowEffect: {
        rotate: 30, 
        stretch: 0,
        depth: 100, 
        modifier: 1,
        slideShadows: true,
    },
    autoplay: {
        delay: 4500, 
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("-YDq2LY6mmU44YF79"); 

    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault(); 

       
        let nombre = document.getElementById("nombre").value;
        let email = document.getElementById("email").value;
        let mensaje = document.getElementById("mensaje").value;

        let parametros = {
            from_name: nombre,
            from_email: email,
            message: mensaje
        };

        
        emailjs.send("service_lnvfi4a", "template_vcbdmkp", parametros)
            .then(function (response) {
                console.log("✅ Correo enviado con éxito", response);
                document.getElementById("status-message").innerText = "✅ ¡Mensaje enviado!";
                document.getElementById("contact-form").reset(); 
            })
            .catch(function (error) {
                console.error("❌ Error al enviar el correo", error);
                document.getElementById("status-message").innerText = "❌ Error al enviar mensaje.";
            });
    });
});

