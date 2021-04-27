const botonOscuro=document.getElementById('oscuro');
const menus=document.querySelector('.menu');
const section1Titulo=document.querySelector('.section1-titulo__fondo color__claro');

botonOscuro.addEventListener("click", ()=>{
    if (menus.className=="menu color__claro") {
        menus.className="menu color__oscuro"
        section1Titulo.className="section1-titulo__fondo color__oscuro"
    }
    else{
        menus.className="menu color__claro"
        section1Titulo.className="section1-titulo__fondo color__claro"
    }
})