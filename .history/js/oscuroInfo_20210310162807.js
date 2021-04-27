const botonOscuro=document.getElementById('oscuro');
const menus=document.querySelector('.menu');
const h1Info=document.querySelector('.h1');
const cardInfo=document.querySelectorAll('.card');
const foot=document.querySelector('.footer');


botonOscuro.addEventListener("click", ()=>{
    if (menus.className=="menu color__claro") {
        menus.className="menu color__oscuro"
        h1Info.className="h1 color__oscuro"
        for (let index = 0; index < cardInfo.length; index++) {
            const element = cardInfo[index];
            element.className="card color__oscuro card_width mb-1"
        }
        foot.className="footer color__oscuro"
    }
    else{
        menus.className="menu color__claro"
        h1Info.className="h1 color__claro"
        for (let index = 0; index < cardInfo.length; index++) {
            const element = cardInfo[index];
            element.className="card color__claro card_width mb-1"
        }
        foot.className="footer color__claro"
    }
})