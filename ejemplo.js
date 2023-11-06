//CÓDIGO DEL PRIMER VIDEO

/*console.log(document.getElementById("cabecera"));

console.log(document.getElementsByClassName("border-grey"));

console.log(document.getElementsByTagName("nav"));

console.log(document.getElementsByTagName("li"));

console.log(document.getElementsByName("cabecera-nombre"));

console.log(document.querySelector("li"));

console.log(document.querySelectorAll("li"));

console.log(document.querySelectorAll(".border-grey"));

console.log(document.querySelector("#cabecera"));

console.log(document.querySelector("[name=cabecera-nombre]"));

const elemento = document.getElementById("cabecera");

const lista1 = document.getElementsByClassName("border-grey");

const lista2 = document.querySelectorAll(".border-grey")

const listaArray = [...lista1];*/

//CÓDIGO DEL SEGUNDO VIDEO

/*const titulo2 = document.createElement("h2");

const textoTitulo2 = document.createTextNode("Nuevo título");

const articulo = document.querySelector("article");

const articulo2 = articulo.cloneNode(true);

const section = document.getElementById("seccion")

//section.appendChild(articulo2);

section.insertAdjacentElement("beforebegin", articulo2);

//section.insertAdjacentElement("beforeend", articulo2);

//section.insertAdjacentElement("afterbegin", articulo2);

//section.insertAdjacentElement("afterend", articulo2);

section.insertAdjacentText("beforebegin", "Texto de prueba");

section.insertAdjacentHTML("beforeend", "<h3>Esto es un elemento inventado</h3>")

//section.remove();

section.innerHTML = "<h2>Nuevo título de la sección</h2>"

section.children[0].textContent = "Otro texto más";

section.setAttribute('id', "seccion1")

//section.className += "nuevaClase";

section.classList.add("nuevaClase");

section.classList.remove("nuevaClase");

section.classList.toggle("nuevaClase");*/

//CÓDIGO DEL TERCER VIDEO

/*const clickTitulo = () =>{
    console.log("El usuario hizo click en el título");
}

const titulo2 = document.getElementById("tituloForm");

titulo2.addEventListener("click", clickTitulo);

//titulo2.removeEventListener("click", clickTitulo);

document.addEventListener("DOMContentLoaded", () => {
    console.log("El documento se ha cargado")
})*/

//CÓDIGO DEL CUARTO VIDEO

const form = document.querySelector("#formulario");

const enviarFormulario = (event) => {
  event.preventDefault();

  const { name, email, password } = event.target;

  console.log(name.value, email.value, password.value);

  if (name.value.length === 0) alert("El nombre no es válido");
};

form.addEventListener("submit", enviarFormulario);

const section = document.getElementById("seccion");
const titulo2 = document.querySelector("#tituloForm");

titulo2.addEventListener("click", (event) => {
  console.log(event.bubbles, event.cancelBubble);
  event.stopPropagation();
  console.log(event.bubbles, event.cancelBubble);
  console.log("CLICK EN EL TÍTULO");
});

section.addEventListener(
  "click",
  () => {
    console.log("CLICK EN LA SECCIÓN");
  },
  {
    capture: true,
  }
);
