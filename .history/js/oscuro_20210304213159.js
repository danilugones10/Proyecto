const botonOscuro=document.getElementById('oscuro');
const menus=document.querySelector('.menu');
const section1Titulo=document.querySelector('.section1-titulo__fondo');
botonOscuro.addEventListener("click", ()=>{
    if (menus.className=="menu color__claro") {
        menus.className=" menu color__oscuro"
    }
    else{
        menus.className="menu color__claro"
    }
})