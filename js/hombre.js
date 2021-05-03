const caja=document.getElementById("cajilla");

<<<<<<< HEAD
fetch('http://localhost:8080/producto/1')
=======
<<<<<<< HEAD
fetch('http://localhost:8080/producto/1')
=======
fetch('http://localhost:8080/product')
>>>>>>> c8e0d354ad04da0771a45ec0133ff729fc2044d6
>>>>>>> ff57c5604d1b7b8b75343c1e0ee3b2e1d3ad75e1
    // .then(res => response.ok ? Promise.resolve(res) : Promise.reject(res))
    .then(res => res.json())
    .then(data => {
        console.log(data)
        const fragment=document.createDocumentFragment()
        for (let i = 0; i < data.length; i++) {
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
            cabezera.textContent = `${data[i].nombre_producto}`
            img.src= `${data[i].imagen}`
            precio.textContent=`${data[i].precio}€`
            cuerpo.textContent=`${data[i].marca} - ${data[i].color}`
<<<<<<< HEAD
=======
            boton.id=`boton ${data[i].id_producto}`;boton.className="btn btn-primary"
            boton.textContent="Añadir"
>>>>>>> ff57c5604d1b7b8b75343c1e0ee3b2e1d3ad75e1
            div.className="sudaderasHombre"
            div.id=`ficha ${data[i].id_producto}`
            div.appendChild(cabezera)
            div.appendChild(cuerpo)
            div.appendChild(img)
            div.appendChild(precio)
<<<<<<< HEAD
=======
            div.appendChild(boton)
>>>>>>> ff57c5604d1b7b8b75343c1e0ee3b2e1d3ad75e1
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
