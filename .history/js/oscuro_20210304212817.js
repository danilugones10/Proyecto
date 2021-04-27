const botonOscuro=document.getElementById('oscuro');
const menus=document.querySelector('.menu');
console.log($color__claro)
botonOscuro.addEventListener("click", ()=>{
    if (menus.className=="menu__claro") {
        menus.className="menu__claro"
        console.log("claro")
    }
    else{
        menus.style.backgroundColor==$color__claro
        console.log("oscuro")
    }
})