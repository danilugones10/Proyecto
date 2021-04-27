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
        hombreTalla.className="hombre-talla color__oscuro"
        tabla.className="table color__oscuro"
        footer.className="footer color__oscuro"
        for (let index = 0; index < cards.length; index++) {
            const element = array[index];
            element.className="card color__oscuro"   
        }  
    }
    else{
        menus.className="menu color__claro"
        hombreTalla.className="hombre-talla color__claro"
        tabla.className="table color__claro"
        footer.className="footer color__claro"
        for (let index = 0; index < cards.length; index++) {
            const element = array[index];
            element.className="card color__claro"   
        } 
    }
})