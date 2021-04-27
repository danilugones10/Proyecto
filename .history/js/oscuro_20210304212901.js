const botonOscuro=document.getElementById('oscuro');
const menus=document.querySelector('.menu');
botonOscuro.addEventListener("click", ()=>{
    if (menus.className=="menu menu__claro") {
        menus.className=" menu menu__oscuro"
        console.log("claro")
    }
    else{
        menus.className=="menu menu__claro"
        console.log("oscuro")
    }
})