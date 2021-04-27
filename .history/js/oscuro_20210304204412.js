const botonOscuro=document.getElementById('oscuro');
const menus=document.querySelector('.menu');
botonOscuro.addEventListener("click", ()=>{
    if (menus.style.backgroundColor==$color_claro) {
        menus.style.backgroundColor==$color_oscuro
        console.log("claro")
    }
    else{
        menus.style.backgroundColor==$color_claro
        console.log("oscuro")
    }
})
