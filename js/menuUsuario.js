const header=document.querySelector('.header');
const nav=document.createElement('nav');
nav.className="menu";
const ul=document.createElement('ul');
ul.className="menu__list";
const fragment=document.createDocumentFragment();

const bot=document.createElement('div');
bot.id="oscuro";
<<<<<<< HEAD
bot.className="";
=======
<<<<<<< HEAD
bot.className="";
=======
bot.className=""
>>>>>>> dde1f623f7ab0cfe0e911323a11b773b5fc78fed
>>>>>>> 4736ed7bcc79daefb2fb5c6907483cf60de85bfe
bot.innerHTML='<i class="bi bi-toggle-on"></i>';
nav.appendChild(bot);

const li0=document.createElement('li');
li0.className="menu__item";
const a0=document.createElement('a');
a0.href="mainUsuario.html";
a0.textContent="Principal";
li0.appendChild(a0)
fragment.appendChild(li0);

const li=document.createElement('li');
li.className="menu__item";
const a=document.createElement('a');
<<<<<<< HEAD
a.href="hombre.html";
=======
a.href="hombreUsuario.html";
>>>>>>> 4736ed7bcc79daefb2fb5c6907483cf60de85bfe
a.textContent="Hombre";
li.appendChild(a)
fragment.appendChild(li);

const li2=document.createElement('li');
li2.className="menu__item";
const a2=document.createElement('a');
a2.href="mujerUsuario.html";
a2.textContent="Mujer";
li2.appendChild(a2)
fragment.appendChild(li2);

const li3=document.createElement('li');
li3.className="menu__item";
const a3=document.createElement('a');
a3.href="contactoUsuario.html";
a3.textContent="Contacto";
li3.appendChild(a3);
fragment.appendChild(li3);

const li4=document.createElement('li');
li4.className="menu__item";
const a4=document.createElement('a');
a4.href="infoUsuario.html";
a4.textContent="Info";
li4.appendChild(a4)
fragment.appendChild(li4);

const li6=document.createElement('li');
const button6=document.createElement('button');
button6.className="inicio";
const a6=document.createElement('a');
a6.href="main.html";
a6.textContent="Cerrar Sesion";
button6.appendChild(a6);
li6.appendChild(button6);
fragment.appendChild(button6);

<<<<<<< HEAD
const li7=document.createElement('li');
li7.id="sesion";
li7.style.display="block";
// li7.textContent=0;
fragment.appendChild(li7);

const li5=document.createElement('div');
=======
const li5=document.createElement('div');
<<<<<<< HEAD
>>>>>>> 4736ed7bcc79daefb2fb5c6907483cf60de85bfe
const a5=document.createElement('a');
a5.innerHTML='<i class="bi bi-bag"></i>';
li5.className="carrito";
li5.id="carrito";
a5.href="carrito.html";
li5.appendChild(a5);
<<<<<<< HEAD
=======
=======
li5.innerHTML='<i class="bi bi-bag"></i>';
li5.className="carrito";
li5.id="carrito";
>>>>>>> dde1f623f7ab0cfe0e911323a11b773b5fc78fed
>>>>>>> 4736ed7bcc79daefb2fb5c6907483cf60de85bfe
fragment.appendChild(li5);

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
<<<<<<< HEAD
     })

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
          // busco el igual, antes de ??l tengo el nombre y despu??s su valor
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
        // si no la encuentro devuelvo una cadana vac??a
        return "";
    }

    function change() {
        if(getCookie("usuario")!=""){
            sesion.textContent=1;
        }
    }
    change()

    a6.addEventListener('click', ()=>{
        deleteCookie('usuario');
        deleteCookie('contrase??a');
    })
=======
     })
>>>>>>> 4736ed7bcc79daefb2fb5c6907483cf60de85bfe
