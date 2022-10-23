/***************
/ SELECTORS
****************/

const botonNavbar = document.getElementById("botonNavbar");
const botonNavbarAux= document.getElementById("botonNavbarAux");
const navBar= document.getElementById("navbarPrincipal");
const imagenPrueba= document.getElementById("prueba");

const hiddenElements= document.querySelectorAll(".ocultar");
const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add("mostrar");
        }
        else{
            entry.target.classList.remove("mostrar");
        }
    });
});

hiddenElements.forEach((element) =>{
    observer.observe(element);
});

const elementosDerecha= document.querySelectorAll(".ocultar-derecha");
const observerDerecha = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add("mostrar-derecha");
        }
        else{
            entry.target.classList.remove("mostrar-derecha");
        }
    });
});

elementosDerecha.forEach((element) =>{
    observerDerecha.observe(element);
});

const elementosIzquierda= document.querySelectorAll(".ocultar-izquierda");
const observerIzquierda = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add("mostrar-derecha");
        }
        else{
            entry.target.classList.remove("mostrar-derecha");
        }
    });
});

elementosIzquierda.forEach((element) =>{
    observerIzquierda.observe(element);
});
/***************
/ Listeners
****************/


botonNavbarAux.addEventListener("click",()=>{
    botonNavbar.classList.toggle("fa-xmark");
    botonNavbar.classList.toggle("fa-bars");
});


/***************
/ Funciones
****************/



/***************
/ Ejecuciones
****************/

//neonBackground();

