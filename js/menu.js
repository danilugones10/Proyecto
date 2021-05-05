const header=document.querySelector('.header');
const nav=document.createElement('nav');
nav.className="menu";
const ul=document.createElement('ul');
ul.className="menu__list";
const fragment=document.createDocumentFragment();

const bot=document.createElement('div');
bot.id="oscuro";
bot.className=""
bot.innerHTML='<i class="bi bi-toggle-on"></i>';
nav.appendChild(bot);

const li0=document.createElement('li');
li0.className="menu__item";
const a0=document.createElement('a');
a0.href="main.html";
a0.textContent="Principal";
li0.appendChild(a0)
fragment.appendChild(li0);

const li=document.createElement('li');
li.className="menu__item";
const a=document.createElement('a');
a.href="hombre.html";
a.textContent="Hombre";
li.appendChild(a)
fragment.appendChild(li);

const li2=document.createElement('li');
li2.className="menu__item";
const a2=document.createElement('a');
a2.href="mujer.html";
a2.textContent="Mujer";
li2.appendChild(a2)
fragment.appendChild(li2);

const li3=document.createElement('li');
li3.className="menu__item";
const a3=document.createElement('a');
a3.href="contacto.html";
a3.textContent="Contacto";
li3.appendChild(a3);
fragment.appendChild(li3);

const li4=document.createElement('li');
li4.className="menu__item";
const a4=document.createElement('a');
a4.href="info.html";
a4.textContent="Info";
li4.appendChild(a4)
fragment.appendChild(li4);

<<<<<<< HEAD
const li7=document.createElement('li');
li7.id="sesion";
// li7.textContent=0;
fragment.appendChild(li7);
=======
// const li5=document.createElement('input');
// li5.setAttribute('placeholder', ' buscar');
// li5.className="busqueda";
// li5.id="busqueda";
// fragment.appendChild(li5);
>>>>>>> 4736ed7bcc79daefb2fb5c6907483cf60de85bfe

const li6=document.createElement('li');
const button6=document.createElement('button');
button6.className="inicio";
const a6=document.createElement('a');
a6.href="formulario.html?#";
a6.textContent="Iniciar Sesion";
button6.appendChild(a6);
li6.appendChild(button6);
fragment.appendChild(button6);

const li8=document.createElement('li');
const button8=document.createElement('button');
button8.className="cierre";
const a8=document.createElement('a');
a8.href="main.html";
a8.textContent="Cerrar Sesion";
button8.appendChild(a8);
li8.appendChild(button8);
fragment.appendChild(button8);

const li9=document.createElement('div');
const a9=document.createElement('a');
a9.innerHTML='<i class="bi bi-bag"></i>';
li9.className="carrito";
li9.id="carrito";
a9.href="carrito.html";
li9.appendChild(a9);
fragment.appendChild(li9);

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

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
    let decodedCookie = decodeURIComponent(document.cookie);
    // En decodedCookie tengo las cookies en formato cadena
    // console.log(decodedCookie);
    //En ca tengo todas las cookies como array
    let ca = decodedCookie.split(';');
    // console.log(ca);
    // recorro el array 
    for(let i = 0; i <ca.length; i++) {
      // quito espacios por si los hubiera
      let c = ca[i].trim();      
      // busco el igual, antes de él tengo el nombre y después su valor
      let igual=c.search("=")
      // Extraigo el nombre (desde el principio al igual)
      let nombre=c.substring(0, igual)
      // console.log(nombre)
      // Si es la cookie que busco
      if (nombre==cname){
        // extraigo el valor (del igual al final)
        let cookie=c.substring(igual+1,c.length)
        return cookie
        // no busco mas, salgo del for
        break;
      }
    }
    // si no la encuentro devuelvo una cadana vacía
    return "";
}
function deleteCookie(name) {
        setCookie(name, "", {
          'max-age': -1
        })
    }

    hamburguesa.addEventListener('click', ()=>{
        
        if(window.innerWidth<767){
                
            if( menu.style.height==="75px"){
                header.style.height="100%"
                menu.style.height="100%";
                main.style.marginTop="0px";
                li0.style.visibility="visible"
                li.style.visibility="visible";
                li2.style.visibility="visible";
                li3.style.visibility="visible";
                li4.style.visibility="visible";
            }
            else{
                header.style.height="75px"
                menu.style.height="75px";
                main.style.marginTop="-250px";
                li0.style.visibility="hidden"
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
            li0.style.visibility="visible"
            li.style.visibility="visible";
            li2.style.visibility="visible";
            li3.style.visibility="visible";
            li4.style.visibility="visible";
        }   
        else{
            header.style.height="75px";
            main.style.marginTop="-250px";
            li0.style.visibility="hidden"
            li.style.visibility="hidden";
            li2.style.visibility="hidden";
            li3.style.visibility="hidden";
            li4.style.visibility="hidden";
        }
     })

    

    function InicioSesion() {
        if(getCookie("usuario")==""){
            button8.style.display="none"
            button6.style.display="block"
            a9.style.display="none"
        }
        else{
            button8.style.display="block"
            button6.style.display="none"
            a9.style.display="block"
        }  
    }
    InicioSesion()
      

    button8.addEventListener('click', ()=>{
        deleteCookie('usuario');
        deleteCookie('contraseña');
    })