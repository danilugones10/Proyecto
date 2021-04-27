const botonOscuro=document.getElementById('oscuro');
const menus=document.querySelector('.menu');
const h1Info=document.querySelector('.h1Info');
const cardInfo=document.querySelectorAll('.card');


botonOscuro.addEventListener("click", ()=>{
    if (menus.className=="menu color__claro") {
        menus.className="menu color__oscuro"
        h1Info.className="h1 color__oscuro"
        for (let index = 0; index < cardInfo.length; index++) {
            const element = cardInfo[index];
            element.className="card color__oscuro"
        }
    }
    else{
        menus.className="menu color__claro"
        h1Info.className="h1 color__claro"
        for (let index = 0; index < cardInfo.length; index++) {
            const element = cardInfo[index];
            element.className="card color__claro"
        }
    }
})