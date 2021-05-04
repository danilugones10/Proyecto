const nombre_usuario=document.getElementById('first-name');
const password=document.getElementById('password');
<<<<<<< HEAD
const enviando=document.getElementById('enviando');

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function deleteCookie(name) {
    setCookie(name, "", {
      'max-age': -1
    })
}

// enviando.addEventListener('click', ()=>{
//     deleteCookie("usuario")
//     deleteCookie("contraseña")
// })

// enviando.addEventListener('click', ()=>{
//     setCookie("usuario", nombre_usuario.value, 5)
//     setCookie("contraseña", password.value, 5)
// })
=======
>>>>>>> dde1f623f7ab0cfe0e911323a11b773b5fc78fed

function login() {
    fetch('http://localhost:9090/usuario')
    // .then(res => response.ok ? Promise.resolve(res) : Promise.reject(res))
    .then(res => res.json())
    .then(data => {
        let valor=0;
        console.log(data)
        
        for (let i = 0; i < data.length; i++) {
            if(nombre_usuario.value===data[i].nombre_usuario){
                valor=1;
                if(password.value===data[i].password){
                    valor=2;
                }
            }
        }
<<<<<<< HEAD
        if(valor==2){
            console.log("inicio sesion")
            window.location="http://127.0.0.1:5500/mainUsuario.html";
            setCookie("usuario", nombre_usuario.value, 5)
            setCookie("contraseña", password.value, 5)
=======

        if(valor==2){
            console.log("inicio sesion")
            window.location="http://127.0.0.1:5500/mainUsuario.html";
>>>>>>> dde1f623f7ab0cfe0e911323a11b773b5fc78fed
        }
        else if(valor==1){
            alert("contraseña incorrecta")
        }
        else{
            alert("nombre de usuario incorrecto")
        }
    })
    .catch(err=> console.log(`error: ${err.status}`))
<<<<<<< HEAD
    console.log(usuario)
=======
>>>>>>> dde1f623f7ab0cfe0e911323a11b773b5fc78fed
}