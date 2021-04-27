const botonOscuro=document.getElementById('oscuro');
botonOscuro.className="btn"
const menus=document.querySelector('.menu');
const hombreTalla=document.querySelector('.hombre-talla');
const tabla=document.querySelector('.table');
const cards=document.querySelectorAll('card');

const footer=document.querySelector('.footer');


botonOscuro.addEventListener("click", ()=>{
    if (menus.className=="menu color__claro") {
        menus.className="menu color__oscuro"
        hombreTalla.className="hombre-talla color__claro"

        footer.className="footer color__oscuro"
        
        
    }
    else{
        menus.className="menu color__claro"

        footer.className="footer color__claro"
        
    }
})