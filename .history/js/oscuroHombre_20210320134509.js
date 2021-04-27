const botonOscuro=document.getElementById('oscuro');
botonOscuro.className="btn"
const menus=document.querySelector('.menu');
const hombreTalla=document.querySelector('.hombre-talla');
const hombreSudadera=document.querySelector('.hombre-sudadera');
const tabla=document.querySelector('.table');
const cards=document.querySelectorAll('.card');
const footer=document.querySelector('.footer');


botonOscuro.addEventListener("click", ()=>{
    if (menus.className=="menu color__claro") {
        menus.className="menu color__oscuro"
        hombreTalla.className="hombre-talla color__oscuro text-center"
        hombreSudadera.className="hombre-sudadera color__oscuro text-center"
        tabla.className="table color__oscuro text-light"
        footer.className="footer color__oscuro"
        for (let index = 0; index < cards.length; index++) {
            const element = cards[index];
            element.className="card color__oscuro text-light "   
        }  
    }
    else{
        menus.className="menu color__claro"
        hombreTalla.className="hombre-talla color__claro text-center"
        hombreSudadera.className="hombre-sudadera color__claro text-center"
        tabla.className="table color__claro text-light"
        footer.className="footer color__claro"
        for (let index = 0; index < cards.length; index++) {
            const element = cards[index];
            element.className="card color__claro text-dark"   
        } 
    }
})