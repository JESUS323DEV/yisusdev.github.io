//! !funciones de details abierto en pantalla < LG
const details = document.querySelectorAll('.cont-proyectos details');
function toggleDetails() {
    details.forEach(d => {
        if (window.innerWidth >= 768) {
            d.setAttribute('open', true);
        } else {
            d.removeAttribute('open');
        }
    });
}
toggleDetails();
window.addEventListener('resize', toggleDetails);



//! !funciones al terminar pantalla de carga 
const pantallaCarga = document.getElementById("pantallaCarga");
const headerNav = document.getElementById("headerNav");
const hero = document.getElementById("hero");
const cont2section = document.getElementById("cont2section");
const aboutMe = document.getElementById("aboutMe");
const proyectos = document.getElementById("proyectos");


const logo = document.getElementById("logo");


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

        // Solo cerrar menú si estamos en XS o SM
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


// ---- Cambio de cursor (h1 → párrafo) ----
setTimeout(() => {
    cursorBarra0.classList.add("spanD-none");
    cursorBarra1.classList.remove("spanD-none");
}, 7100);


// ===================== TYPING SECUNDARIO (Hola soy Jesús) =====================

const typing2 = document.getElementById("typing2");
const tecleo2 = "Hola soy Jesús";
let h = 0;

// ---- Elementos implicados ----
const opacitySpan = document.getElementById("opacitySpan");
const textBg = document.getElementById("textBg");
const textHero = document.getElementById("textHero");

// ---- Reset inicial ----
typing2.textContent = " ";


// ===================== INICIO ANIMACIÓN SEGUNDA LÍNEA =====================
setTimeout(() => {

    // Primer carácter
    typing2.textContent = tecleo2.charAt(0);
    h = 1;

    // ---- Intervalo de escritura ----
    const escribir = setInterval(() => {

        console.log(h, tecleo2.slice(0, h));

        if (h <= tecleo2.length) {
            typing2.textContent = tecleo2.slice(0, h);
            h++;

        } else {
            clearInterval(escribir);
        }

    }, 150); // velocidad typing


    // ===================== OCULTAR “...” =====================
    setTimeout(() => {
        opacitySpan.classList.remove("spanD-none");
    }, 2700);


    // ===================== MOSTRAR FONDO (bg) =====================
    setTimeout(() => {
        textBg.classList.remove("textOpacity");
        cursorBarra1.classList.add("spanD-none");


    }, 3500);


    // ===================== PEGAR TEXTO FINAL =====================
    setTimeout(() => {
        opacitySpan.classList.add("spanD-none");
        textHero.classList.remove("textOpacity");
        punto.classList.remove("spanD-none");

    }, 3900);


    // ===================== QUITAR FONDO Y FIJAR CURSOR =====================
    setTimeout(() => {
        textBg.classList.remove("bg-text");

    }, 7000);

    setTimeout(() => {
        cursorBarra2.classList.remove("spanD-none");

    }, 7100);


}, 7100); // delay inicial antes de empezar




