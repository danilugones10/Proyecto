const botonOscuro=document.getElementById('oscuro');
const menu=document.querySelector('.menu');
botonOscuro.addEventListener(click, ()=>{
    if (menu.style.backgroundColor==$color_claro) {
        menu.style.backgroundColor==$color_oscuro
        console.log("claro")
    }
    else{
        menu.style.backgroundColor==$color_claro
    }
})
