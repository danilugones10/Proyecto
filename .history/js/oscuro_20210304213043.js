const botonOscuro=document.getElementById('oscuro');
const menus=document.querySelector('.menu');

botonOscuro.addEventListener("click", ()=>{
    if (menus.className=="menu color__claro") {
        menus.className=" menu color__oscuro"
    }
    else{
        menus.className="menu color__claro"
    }
})