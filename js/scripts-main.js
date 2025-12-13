
//! EVITA QUE DETAILS SE CIERRE AL HACER SCROLL EN XS SM 
document.querySelectorAll("details").forEach(det => {
    det.addEventListener("toggle", e => {
        // Si el cierre no viene de (scroll), lo bloqueas
        if (!det.dataset.userToggle) {
            det.open = true;
        }

        // Reseteas el flag para que no quede marcado
        det.dataset.userToggle = "";
    });

    // Detectar click del usuario
    det.querySelector("summary").addEventListener("click", () => {
        det.dataset.userToggle = "true";
    });
});



//! SCROLL DETAILS AL ABRIR
//! SCROLL DETAILS AL ABRIR (offset distinto según tamaño)
const detailsItems = document.querySelectorAll("details");

detailsItems.forEach(detail => {
    detail.addEventListener("toggle", () => {
        if (detail.open && !detail.dataset.scrolled) {
            const summary = detail.querySelector("summary");

            const viewportWidth = window.innerWidth;

            // offsets según breakpoint
            let offset;

            if (viewportWidth >= 1400) {
                // XXL
                offset = 120;
            } else if (viewportWidth >= 1200) {
                // XL
                offset = 120;
            } else {
                // móvil / tablet
                offset = 90;
            }

            const y =
                summary.getBoundingClientRect().top +
                window.pageYOffset -
                offset;

            window.scrollTo({
                top: y,
                behavior: "smooth"
            });

            detail.dataset.scrolled = "true";
        }

        if (!detail.open) {
            delete detail.dataset.scrolled;
        }
    });
});





//! !funciones al terminar pantalla de carga 
const pantallaCarga = document.getElementById("pantallaCarga");
const headerNav = document.getElementById("headerNav");
const hero = document.getElementById("hero");
const cont2section = document.getElementById("cont2section");
const aboutMe = document.getElementById("aboutMe");
const proyectos = document.getElementById("proyectos");




setTimeout(() => {
    pantallaCarga.classList.add("sectionOculto");
    hero.classList.remove("sectionOculto");
    headerNav.classList.remove("sectionOculto");
    aboutMe.classList.remove("sectionOculto");
    proyectos.classList.remove("sectionOculto");
    startTyping();
}, 2500);


setTimeout(() => {
    logo.classList.remove("contOpacity")
}, 6000);
//! ===================== FUNCIONES MENU HAMBURGUESA  =====================

const btnHamburger = document.getElementById("btnHamburger");
const listMenu = document.getElementById("listMenu");

btnHamburger.addEventListener("click", () => {
    listMenu.classList.toggle("oculto-ul");



});
//! ===================== FUNCIONES CERRAR MENU HAMBURGUESA AL PULSAR AL LINK =====================

const links = document.querySelectorAll(".links");

links.forEach(link => {
    link.addEventListener("click", () => {

        //!Solo cerrar menú si estamos en XS o SM
        if (window.innerWidth < 768) {
            listMenu.classList.add("oculto-ul");
        }

    });
});


//! ===================== FUNCIONES HERO: startTyping =====================

function startTyping() {

    //! ---- Elemento donde se escribe ----
    const typing = document.getElementById("typing");

    //! ---- Texto sin tilde ----
    const tecleo = "Frontend creativo en evolucion";
    let i = 0;

    //! ---- Limpia antes de escribir ----
    typing.textContent = "";

    //! ===================== INICIO DEL TYPING =====================
    setTimeout(() => {

        console.log("Contenido inicial:", typing.textContent);

        //! Primer carácter
        typing.textContent = tecleo.charAt(0);
        i = 1;

        //! ---- Intervalo de escritura ----
        const intervalo = setInterval(() => {

            if (i <= tecleo.length) {
                typing.textContent = tecleo.slice(0, i);
                i++;

            } else {

                //! ---- FIN DE ESCRITURA ----
                clearInterval(intervalo);

                //! ===================== PAUSA ANTES DE BORRAR =====================

                setTimeout(() => {
                    let posicionObjetivo = tecleo.length - 2; //! borrar hasta la "o"

                    //! ---- Intervalo de borrado ----
                    const borrado = setInterval(() => {

                        if (i > posicionObjetivo) {
                            i--;
                            typing.textContent = tecleo.slice(0, i);

                        } else {

                            clearInterval(borrado);

                            //! ===================== PAUSA ANTES DE CORREGIR =====================
                            setTimeout(() => {

                                const corregido = "Frontend creativo en evolución";
                                let j = i;

                                //! ---- Intervalo de reescritura ----
                                const reescribir = setInterval(() => {

                                    if (j <= corregido.length) {
                                        typing.textContent = corregido.slice(0, j);
                                        j++;

                                    } else {
                                        clearInterval(reescribir);
                                    }

                                }, 80); //! velocidad de reescritura

                            }, 10); //! pausa antes de corregir

                        }
                    }, 200); //! velocidad de borrado

                }, 100); //! pausa antes de borrar

            }
        }, 70); //! velocidad del typing

    }, 500); //! delay inicial antes de empezar
}





//! ===================== CURSORES HERO =====================

const cursorBarra0 = document.getElementById("cursorBarra0");
const cursorBarra1 = document.getElementById("cursorBarra1");
const cursorBarra2 = document.getElementById("cursorBarra2");
const punto = document.getElementById("punto");


//!---- Cambio de cursor (h1 → párrafo) ----
setTimeout(() => {
    cursorBarra0.classList.add("spanD-none");
    cursorBarra1.classList.remove("spanD-none");
}, 7100);


//!===================== TYPING SECUNDARIO (Hola soy Jesús) =====================

const typing2 = document.getElementById("typing2");
const tecleo2 = "Hola soy Jesús";
let h = 0;

//!---- Elementos implicados ----
const opacitySpan = document.getElementById("opacitySpan");
const textBg = document.getElementById("textBg");
const textHero = document.getElementById("textHero");

//!---- Reset inicial ----
typing2.textContent = " ";


//!===================== INICIO ANIMACIÓN SEGUNDA LÍNEA =====================
setTimeout(() => {

    //!Primer carácter
    typing2.textContent = tecleo2.charAt(0);
    h = 1;

    //!---- Intervalo de escritura ----
    const escribir = setInterval(() => {

        console.log(h, tecleo2.slice(0, h));

        if (h <= tecleo2.length) {
            typing2.textContent = tecleo2.slice(0, h);
            h++;

        } else {
            clearInterval(escribir);
        }

    }, 150); //!velocidad typing


    //!===================== OCULTAR “...” =====================
    setTimeout(() => {
        opacitySpan.classList.remove("spanD-none");
    }, 2700);


    //!===================== MOSTRAR FONDO (bg) =====================
    setTimeout(() => {
        textBg.classList.remove("textOpacity");
        cursorBarra1.classList.add("spanD-none");


    }, 3500);


    //!===================== PEGAR TEXTO FINAL =====================
    setTimeout(() => {
        opacitySpan.classList.add("spanD-none");
        textHero.classList.remove("textOpacity");
        punto.classList.remove("spanD-none");

    }, 3900);


    //!===================== QUITAR FONDO Y FIJAR CURSOR =====================
    setTimeout(() => {
        textBg.classList.remove("bg-text");

    }, 7000);

    setTimeout(() => {
        cursorBarra2.classList.remove("spanD-none");

    }, 7100);


}, 7100); //!delay inicial antes de empezar




//! ===================== OCULTAR - MOSTRAR FORMULARIO =====================

const formulario = document.getElementById("formulario");
const btnFormu = document.getElementById("btnFormu");
const closeBtn = document.getElementById("closeBtn");
const contClose = document.getElementById("contClose");

btnFormu.addEventListener("click", () => {
    formulario.classList.remove("formu-oculto");
    contClose.classList.add("formu-oculto");



    if (window.innerWidth <= 992) {


        setTimeout(() => {
            const top = formulario.getBoundingClientRect().top + window.scrollY;


            window.scrollTo({
                top: top - 90, // ← ajusta este número hasta que se vea justo el h4
                behavior: "smooth"
            });
        }, 150);

    } else if (window.innerWidth >= 992) {


        setTimeout(() => {
            const top = formulario.getBoundingClientRect().top + window.scrollY;


            window.scrollTo({
                top: top - 300, // ← ajusta este número hasta que se vea justo el h4
                behavior: "smooth"
            });
        }, 150);


    }


});

closeBtn.addEventListener("click", () => {

    formulario.classList.add("formu-oculto");
    contClose.classList.remove("formu-oculto");



});

//!ANIMACIÓN TARJETAS SOBRE MI EN XXL

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        const x = Math.random() * 40 - 20;
        const y = Math.random() * 40 - 20;

        card.style.setProperty("--glow-x", `${x}px`);
        card.style.setProperty("--glow-y", `${y}px`);
    });

    card.addEventListener("mouseleave", () => {
        card.style.setProperty("--glow-x", "0px");
        card.style.setProperty("--glow-y", "0px");
    });
});


//! MANTENER FOCUS EN NAV MENU
const menuLinks = document.querySelectorAll("#listMenu a");

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        menuLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
    });
});

const logo = document.querySelector(".navMenu img");

logo.addEventListener("click", () => {
    // quitar estado activo de los links
    menuLinks.forEach(l => l.classList.remove("active"));

    // toggle del logo
    logo.classList.toggle("active-logo");
});




