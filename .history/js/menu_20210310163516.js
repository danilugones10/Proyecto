const header=document.querySelector('.header');
const nav=document.createElement('nav');
nav.className="menu color__claro";
const ul=document.createElement('ul');
ul.className="menu__list";
const fragment=document.createDocumentFragment();

const bot=document.createElement('button');
bot.id="oscuro";
bot.textContent="0";
nav.appendChild(bot);

const li=document.createElement('li');
li.className="menu__item";
const a=document.createElement('a');
a.href="hombre.html";
a.textContent="Hombre";
li.appendChild(a)
fragment.appendChild(li);

const li2=document.createElement('li');
li2.textContent="Mujer";
li2.className="menu__item";
fragment.appendChild(li2);

const li3=document.createElement('li');
li3.textContent="Contacto";
li3.className="menu__item";
fragment.appendChild(li3);

const li4=document.createElement('li');
li4.className="menu__item";
const a4=document.createElement('a');
a4.href="info.html";
a4.textContent="Info";
li4.appendChild(a4)
fragment.appendChild(li4);

const li5=document.createElement('input');
li5.setAttribute('placeholder', '   buscar');
li5.className="busqueda";
li5.id="busqueda";
fragment.appendChild(li5);

const li6=document.createElement('li');
const button6=document.createElement('button');
button6.className="inicio";
const a6=document.createElement('a');
a6.href="formulario.html";
a6.textContent="Iniciar Sesion";
button6.appendChild(a6);
li6.appendChild(button6);
fragment.appendChild(button6);

const hamb=document.createElement('label');
hamb.innerHTML="<span>&#9776;</span>";
hamb.className="hamburguesa";
fragment.appendChild(hamb);

ul.appendChild(fragment);
nav.appendChild(ul);
header.appendChild(nav);

const hamburguesa=document.querySelector('.hamburguesa');
const menu=document.querySelector('.menu');
const main=document.querySelector('.main');

    hamburguesa.addEventListener('click', ()=>{
        
        if(window.innerWidth<767){
                
            if( menu.style.height==="75px"){
                menu.style.height="100%";
                main.style.marginTop="0px";
                li.style.visibility="visible";
                li2.style.visibility="visible";
                li3.style.visibility="visible";
                li4.style.visibility="visible";
            }
            else{
                menu.style.height="75px";
                main.style.marginTop="-280px";
                li.style.visibility="hidden";
                li2.style.visibility="hidden";
                li3.style.visibility="hidden";
                li4.style.visibility="hidden";
                
            }
        }
    })

    window.addEventListener("resize",() => {
        if (this.window.innerWidth>767) {
            main.style.marginTop="0px";
            li.style.visibility="visible";
            li2.style.visibility="visible";
            li3.style.visibility="visible";
            li4.style.visibility="visible";
        }   
        else{
            menu.style.height="75px";
            main.style.marginTop="-280px";
            li.style.visibility="hidden";
            li2.style.visibility="hidden";
            li3.style.visibility="hidden";
            li4.style.visibility="hidden";
        }
     })