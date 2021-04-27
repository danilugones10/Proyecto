const botonOscuro=document.getElementById('oscuro');
const menus=document.querySelector('.menu');
const section1Titulo=document.querySelector('.section1-titulo__fondo');
const section1Img=document.querySelector('.section1-img');

botonOscuro.addEventListener("click", ()=>{
    if (menus.className=="menu color__claro") {
        menus.className="menu color__oscuro"
        section1Titulo.className="section1-titulo__fondo color__oscuro"
        section1Img.className="section1-img color__oscuro"
    }
    else{
        menus.className="menu color__claro"
        section1Titulo.className="section1-titulo__fondo color__claro"
        section1Img.className="section1-img color__claro"
    }
})