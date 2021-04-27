const botonOscuro=document.getElementById('oscuro');
botonOscuro.className="btn"
const menus=document.querySelector('.menu');
const section1Titulo=document.querySelector('.section1-titulo__fondo');
const section1Img=document.querySelector('.section1-img');
const section2Prior=document.querySelector('.section2-prior');
const section3H1=document.querySelector('.section3-h1-color');
const section3Conte=document.querySelectorAll('.section3-imagenes__contenedor');
const section4H1=document.querySelector('.section4-h1');
const jumnb=document.querySelector('jumnb');
const footer=document.querySelector('.footer');


botonOscuro.addEventListener("click", ()=>{
    if (menus.className=="menu color__claro") {
        menus.className="menu color__oscuro"
        section1Titulo.className="section1-titulo__fondo color__oscuro"
        section1Img.className="section1-img color__oscuro"
        section2Prior.className="section2-prior color__oscuro"
        section3H1.className="section3-h1-color color__oscuro"
        section4H1.className="section4-h1 color__oscuro"
        jumnb.className="jumbotron color__oscuro jumnb"
        footer.className="footer color__oscuro"
        for (let index = 0; index < section3Conte.length; index++) {
            const element = section3Conte[index];
            element.className="section3-imagenes__contenedor color__oscuro"
        }
        
        
    }
    else{
        menus.className="menu color__claro"
        section1Titulo.className="section1-titulo__fondo color__claro"
        section1Img.className="section1-img color__claro"
        section2Prior.className="section2-prior color__claro"
        section3H1.className="section3-h1-color color__claro"
        section4H1.className="section4-h1 color__claro"
        jumnb.className="jumbotron color__claro"
        footer.className="footer color__claro"
        for (let index = 0; index < section3Conte.length; index++) {
            const element = section3Conte[index];
            element.className="section3-imagenes__contenedor color__claro"
        }
        
    }
})