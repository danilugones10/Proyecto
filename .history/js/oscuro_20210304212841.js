const botonOscuro=document.getElementById('oscuro');
const menus=document.querySelector('.menu');
console.log($color__claro)
botonOscuro.addEventListener("click", ()=>{
    if (menus.className=="menu menu__claro") {
        menus.className=" menu menu__claro"
        console.log("claro")
    }
    else{
        menus.className=="menu menu__olaro"
        console.log("oscuro")
    }
})