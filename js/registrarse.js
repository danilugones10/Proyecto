const form1=document.getElementById('formu');
const email=document.getElementById('inputEmail');
const password=document.getElementById('inputPassword');
const nombre=document.getElementById('inputNombre');
const apellido=document.getElementById('inputApellido');
const usuario=document.getElementById('inputUsuario');
const sexo=document.getElementById('inputSexo');
const edad=document.getElementById('inputEdad');
const rol=document.getElementById('inputRol');
const botons=document.getElementById('formBoton');

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4736ed7bcc79daefb2fb5c6907483cf60de85bfe
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

<<<<<<< HEAD
=======
=======
>>>>>>> dde1f623f7ab0cfe0e911323a11b773b5fc78fed
>>>>>>> 4736ed7bcc79daefb2fb5c6907483cf60de85bfe
const formIsValidd = {
    email: false,
    password: false,
    nombre: false,
    apellido: false,
    usuario: false,
    sexo: true,
    edad: false,
    rol: true
}

form1.addEventListener('submit', (e) => {
    e.preventDefault()
    validateForm()
})
nombre.addEventListener('change', (e) => {
    if(e.target.value.trim().length > 1){
        formIsValidd.nombre = true
    }
})
email.addEventListener('change', (e) => {
    const regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (regEx.test(email.value)==true) {
        formIsValidd.email=true
    }
})
password.addEventListener('change', (e) => {
    if(e.target.value.trim().length > 3){
        formIsValidd.password = true
    }
})
apellido.addEventListener('change', (e) => {
    if(e.target.value.trim().length > 1){
        formIsValidd.apellido = true
    }
})
usuario.addEventListener('change', (e) => {
    if((e.target.value.trim().length > 2)&&(e.target.value.trim().length < 20)){
        formIsValidd.usuario = true
    }
})

edad.addEventListener('change', (e) => {
    if(e.target.value.trim().length > 0){
        formIsValidd.edad = true
    }
})

const validateForm = () => {
    // con la línea de abajo convierto el objeto en array
    const formValues = Object.values(formIsValidd)
    // buscamos si algún campo está a false
    const valid = formValues.findIndex(value => value == false)
    // si todos estuvieran bien valid valdrá -1 
    if(valid == -1){
        
        let user = {
            nombre_usuario: usuario.value,
            password: password.value,
            nombre: nombre.value,
            apellidos: apellido.value,
            email: email.value,
            sexo: sexo.value,
            edad: edad.value, 
            rol: rol.value
        };
    
            fetch('http://localhost:9090/user', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(res=> {
                console.log(res);
<<<<<<< HEAD
                window.location="http://127.0.0.1:5500/formulario.html?#";
=======
<<<<<<< HEAD
                window.location="http://127.0.0.1:5500/formulario.html?#";
=======
                window.location="http://127.0.0.1:5500/mainUsuario.html";
>>>>>>> dde1f623f7ab0cfe0e911323a11b773b5fc78fed
>>>>>>> 4736ed7bcc79daefb2fb5c6907483cf60de85bfe
            });
        
    } 
    else{
        console.dir(form1[valid])
        form1[valid].focus()
        alert('Valor invalido en ' + form1[valid].name)
        // alert('Hay un valor invalido en el formulario')
    }
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
}
=======
}



>>>>>>> dde1f623f7ab0cfe0e911323a11b773b5fc78fed
>>>>>>> 4736ed7bcc79daefb2fb5c6907483cf60de85bfe
