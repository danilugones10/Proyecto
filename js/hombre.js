const caja=document.getElementById("cajilla");
<<<<<<< HEAD
const formulario_precio=document.querySelector('.formulario_precio');
const nombreProducto=document.getElementById('nombreProducto');
const euro=document.querySelector('.form-control');

fetch('http://localhost:8080/sudaderasCopia-0.0.1-SNAPSHOT/producto/1')
=======

<<<<<<< HEAD
fetch('http://localhost:8080/producto/1')
=======
<<<<<<< HEAD
fetch('http://localhost:8080/producto/1')
=======
<<<<<<< HEAD
fetch('http://localhost:8080/producto/1')
=======
<<<<<<< HEAD
fetch('http://localhost:8080/producto/1')
=======
fetch('http://localhost:8080/product')
>>>>>>> c8e0d354ad04da0771a45ec0133ff729fc2044d6
>>>>>>> ff57c5604d1b7b8b75343c1e0ee3b2e1d3ad75e1
>>>>>>> dde1f623f7ab0cfe0e911323a11b773b5fc78fed
>>>>>>> 4736ed7bcc79daefb2fb5c6907483cf60de85bfe
    // .then(res => response.ok ? Promise.resolve(res) : Promise.reject(res))
>>>>>>> 5915cffaf3c4a8289550ec6241cf22fd2e9c11d5
    .then(res => res.json())
    .then(data => {
        console.log(data)
        const fragment=document.createDocumentFragment()
        for (let i = 0; i < data.length; i++) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
            // console.log(data[i].categoria.id_categoria)
            // const div=document.createElement('div')
            // const cabezera = document.createElement('h5')
            // const cuerpo =document.createElement('p')
            // const img=document.createElement('img');img.width=200;img.height=200;
            // const precio=document.createElement('p')
            // cabezera.textContent = `${data[i].nombre_producto}`
            // img.src= `${data[i].imagen}`
            // precio.textContent=`${data[i].precio}€`
            // cuerpo.textContent=`${data[i].marca} - ${data[i].color}`
            // div.className="sudaderasHombre"
            // div.id=`ficha ${data[i].id_producto}`
            // div.appendChild(cabezera)
            // div.appendChild(cuerpo)
            // div.appendChild(img)
            // div.appendChild(precio)
            // fragment.appendChild(div)
=======
<<<<<<< HEAD
>>>>>>> 4736ed7bcc79daefb2fb5c6907483cf60de85bfe
>>>>>>> 5915cffaf3c4a8289550ec6241cf22fd2e9c11d5
            console.log(data[i].categoria.id_categoria)
            const div=document.createElement('div')
            const cabezera = document.createElement('h5')
            const cuerpo =document.createElement('p')
<<<<<<< HEAD
            const img=document.createElement('img'); img.width=200;img.height=200;
            const precio=document.createElement('p');precio.id=`${data[i].id_producto}`;
            const boton =document.createElement('button')
            const borrar=document.createElement('button')
            const editar=document.createElement('button')
=======
<<<<<<< HEAD
            const img=document.createElement('img'); img.width=200;img.height=200;
            const precio=document.createElement('p')
            const boton =document.createElement('button')
=======
            const img=document.createElement('img');img.width=200;img.height=200;
            const precio=document.createElement('p')
=======
<<<<<<< HEAD
            console.log(data[i].categoria.id_categoria)
=======
<<<<<<< HEAD
            console.log(data[i].categoria.id_categoria)
=======
>>>>>>> c8e0d354ad04da0771a45ec0133ff729fc2044d6
>>>>>>> ff57c5604d1b7b8b75343c1e0ee3b2e1d3ad75e1
            const div=document.createElement('div')
            const cabezera = document.createElement('h5')
            const cuerpo =document.createElement('p')
            const img=document.createElement('img')
            const precio=document.createElement('p')
<<<<<<< HEAD
=======
            const boton =document.createElement('button')
>>>>>>> ff57c5604d1b7b8b75343c1e0ee3b2e1d3ad75e1
>>>>>>> dde1f623f7ab0cfe0e911323a11b773b5fc78fed
>>>>>>> 4736ed7bcc79daefb2fb5c6907483cf60de85bfe
>>>>>>> 5915cffaf3c4a8289550ec6241cf22fd2e9c11d5
            cabezera.textContent = `${data[i].nombre_producto}`
            img.src= `${data[i].imagen}`
            precio.textContent=`${data[i].precio}€`
            cuerpo.textContent=`${data[i].marca} - ${data[i].color}`
<<<<<<< HEAD
            boton.id=`boton ${data[i].id_producto}`;boton.className="btn btn-primary";
            boton.textContent="Añadir"
            borrar.id=`${data[i].id_producto}`;borrar.className="btn btn-danger";borrar.style.margin="5px"
            borrar.textContent="Borrar"
            editar.id=`${data[i].id_producto}`;editar.className="btn btn-success";
            editar.textContent="Editar"
            borrar.addEventListener('click', ()=>{
                fetch('http://localhost:9090/producto/borrar/'+borrar.id)
                .then(res => res.json())
                .then(data => {
                    location.reload();
                })    
                .catch(err=> console.log(`error: ${err.status}`))
            })
            editar.addEventListener('click', ()=>{
                fetch('http://localhost:9090/product/'+editar.id)
                .then(res => res.json())
                .then(data => {
                    formulario_precio.style.display="block";
                    nombreProducto.textContent=data.nombre_producto;
                    euro.value=data.precio;
                    const cancelar=document.querySelector('.cancelar');
                    const cambiar=document.querySelector('.cambiar');
                    cancelar.addEventListener('click', ()=>{
                        formulario_precio.style.display="none";
                    })
                    cambiar.addEventListener('click', ()=>{
                        formulario_precio.style.display="none";
                        console.log(data.precio)
                        data.precio=euro.value;
                        console.log(data.precio)
                        fetch('http://localhost:9090/producto/editar/'+editar.id)
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);

                        })
                        .catch(err=> console.log(`error: ${err.status}`))
                    })
                })    
                .catch(err=> console.log(`error: ${err.status}`))
            })
            if(getCookie("rol")!=1){
                boton.style.display="none";
            }
            if(getCookie("rol")!=2){
                borrar.style.display="none";
                editar.style.display="none"
            }
=======
<<<<<<< HEAD
            boton.id=`boton ${data[i].id_producto}`;boton.className="btn btn-primary"
            boton.textContent="Añadir"
            if(getCookie("usuario")==""){
                boton.style.display="none";
            }
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
            boton.id=`boton ${data[i].id_producto}`;boton.className="btn btn-primary"
            boton.textContent="Añadir"
>>>>>>> ff57c5604d1b7b8b75343c1e0ee3b2e1d3ad75e1
>>>>>>> dde1f623f7ab0cfe0e911323a11b773b5fc78fed
>>>>>>> 4736ed7bcc79daefb2fb5c6907483cf60de85bfe
>>>>>>> 5915cffaf3c4a8289550ec6241cf22fd2e9c11d5
            div.className="sudaderasHombre"
            div.id=`ficha ${data[i].id_producto}`
            div.appendChild(cabezera)
            div.appendChild(cuerpo)
            div.appendChild(img)
            div.appendChild(precio)
<<<<<<< HEAD
            div.appendChild(boton)
            div.appendChild(borrar)
            div.appendChild(editar)
=======
<<<<<<< HEAD
            div.appendChild(boton)
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
            div.appendChild(boton)
>>>>>>> ff57c5604d1b7b8b75343c1e0ee3b2e1d3ad75e1
>>>>>>> dde1f623f7ab0cfe0e911323a11b773b5fc78fed
>>>>>>> 4736ed7bcc79daefb2fb5c6907483cf60de85bfe
>>>>>>> 5915cffaf3c4a8289550ec6241cf22fd2e9c11d5
            fragment.appendChild(div)
        }
        caja.appendChild(fragment)
    })
<<<<<<< HEAD
    .catch(err=> console.log(`error: ${err.status}`))
=======
<<<<<<< HEAD
    .catch(err=> console.log(`error: ${err.status}`))
=======
<<<<<<< HEAD
    .catch(err=> console.log(`error: ${err.status}`))
=======
<<<<<<< HEAD
    .catch(err=> console.log(`error: ${err.status}`))
=======
<<<<<<< HEAD
    .catch(err=> console.log(`error: ${err.status}`))
=======
    .catch(err=> console.log(`error: ${err.status}`))

    // fetch('http://localhost:8080/product').then(function(response) {
    //     if(response.ok) {
    //       response.blob().then(function(miBlob) {
    //         console.log(response)
    //       });
    //     } else {
    //       console.log('Respuesta de red OK pero respuesta HTTP no OK');
    //     }
    //   })
    //   .catch(function(error) {
    //     console.log('Hubo un problema con la petición Fetch:' + error.message);
    //   });
>>>>>>> c8e0d354ad04da0771a45ec0133ff729fc2044d6
>>>>>>> ff57c5604d1b7b8b75343c1e0ee3b2e1d3ad75e1
>>>>>>> dde1f623f7ab0cfe0e911323a11b773b5fc78fed
>>>>>>> 4736ed7bcc79daefb2fb5c6907483cf60de85bfe
>>>>>>> 5915cffaf3c4a8289550ec6241cf22fd2e9c11d5
