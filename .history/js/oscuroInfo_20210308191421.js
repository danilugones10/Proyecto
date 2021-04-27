const botonOscuro=document.getElementById('oscuro');
const menus=document.querySelector('.menu');
const section1Titulo=document.querySelector('.section1-titulo__fondo');
const section1Img=document.querySelector('.section1-img');
const section2Prior=document.querySelector('.section2-prior');
const section3H1=document.querySelector('.section3-h1-color');
const section3Conte=document.querySelectorAll('.section3-imagenes__contenedor');
const section4H1=document.querySelector('.section4-h1');
const footer=document.querySelector('.footer');
const h1Info=document.querySelector('.h1Info');
const cardInfo=document.querySelectorAll('.card');


botonOscuro.addEventListener("click", ()=>{
    if (menus.className=="menu color__claro") {
        menus.className="menu color__oscuro"
        h1Info.className="h1 color__oscuro"
        for (let index = 0; index < cardInfo.length; index++) {
            const element = cardInfo[index];
            element.className="card color__oscuro"
        }
        
        
        
    }
    else{
        menus.className="menu color__claro"
        h1Info.className="h1 color__claro"
        for (let index = 0; index < cardInfo.length; index++) {
            const element = cardInfo[index];
            element.className="card color__claro"
        }
    }
})