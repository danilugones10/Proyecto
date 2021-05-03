const nombre_usuario=document.getElementById('first-name');
const password=document.getElementById('password');

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

        if(valor==2){
            console.log("inicio sesion")
            window.location="http://127.0.0.1:5500/mainUsuario.html";
        }
        else if(valor==1){
            alert("contraseña incorrecta")
        }
        else{
            alert("nombre de usuario incorrecto")
        }
    })
    .catch(err=> console.log(`error: ${err.status}`))
}