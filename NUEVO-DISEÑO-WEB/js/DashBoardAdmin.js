const esconder_barra_lateral = document.getElementById("esconder_barra_lateral");
const activar_barra_lateral = document.getElementById("activar_barra_lateral");
const barra_lateral_administrador = document.getElementById("barra_lateral_administrador");
const opciones_administrador = document.getElementById("opciones_administrador");
const header = document.getElementById("header");
const titulo_barra = document.getElementById("titulo_barra");

activar_barra_lateral.addEventListener('click', () => {
    header.classList.add("DisplayNone");
    header.classList.add("headerOpen");
    barra_lateral_administrador.classList.add("EsconderBarra");
    barra_lateral_administrador.classList.add("MostrarOpciones")
    barra_lateral_administrador.classList.add("tituloBarra");
    activar_barra_lateral.style.display = "none"
});
esconder_barra_lateral.addEventListener('click', () => {
    header.classList.remove("DisplayNone");
    header.classList.remove("headerOpen");
    barra_lateral_administrador.classList.remove("EsconderBarra");
    barra_lateral_administrador.classList.remove("MostrarOpciones")
    barra_lateral_administrador.classList.remove("tituloBarra");
    activar_barra_lateral.style.display = "contents"
})