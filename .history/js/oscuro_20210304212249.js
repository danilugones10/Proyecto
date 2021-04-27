const botonOscuro=document.getElementById('oscuro');
const menus=document.querySelector('.menu');
botonOscuro.addEventListener("click", ()=>{
    if (menus.style.backgroundColor==$color__claro) {
        menus.style.backgroundColor==$color__oscuro
        console.log("claro")
    }
    else{
        menus.style.backgroundColor==$color__claro
        console.log("oscuro")
    }
})