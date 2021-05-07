const caja=document.getElementById("cajilla");

fetch('http://localhost:8080/sudaderasCopia-0.0.1-SNAPSHOT/producto/2')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        const fragment=document.createDocumentFragment()
        for (let i = 0; i < data.length; i++) {
            console.log(data[i].categoria.id_categoria)
            const div=document.createElement('div')
            const cabezera = document.createElement('h5')
            const cuerpo =document.createElement('p')
            const img=document.createElement('img'); img.width=200;img.height=200;
            const precio=document.createElement('p')
            const boton =document.createElement('button')
            const borrar=document.createElement('button')
            const editar=document.createElement('button')
            cabezera.textContent = `${data[i].nombre_producto}`
            img.src= `${data[i].imagen}`
            precio.textContent=`${data[i].precio}€`
            cuerpo.textContent=`${data[i].marca} - ${data[i].color}`
            boton.id=`boton ${data[i].id_producto}`;boton.className="btn btn-primary";
            boton.textContent="Añadir"
            borrar.id=`${data[i].id_producto}`;borrar.className="btn btn-danger";borrar.style.margin="5px"
            borrar.textContent="Borrar"
            editar.id=`editar ${data[i].id_producto}`;editar.className="btn btn-success"
            editar.textContent="Editar"
            borrar.addEventListener('click', ()=>{
                fetch('http://localhost:9090/producto/borrar/'+borrar.id)
                .then(res => res.json())
                .then(data => {
                    location.reload();
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
            div.className="sudaderasHombre"
            div.id=`ficha ${data[i].id_producto}`
            div.appendChild(cabezera)
            div.appendChild(cuerpo)
            div.appendChild(img)
            div.appendChild(precio)
            div.appendChild(boton)
            div.appendChild(borrar)
            div.appendChild(editar)
            fragment.appendChild(div)
        }
        caja.appendChild(fragment)
    })
    .catch(err=> console.log(`error: ${err.status}`))