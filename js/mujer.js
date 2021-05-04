const caja=document.getElementById("cajilla");

fetch('http://localhost:8080/producto/2')
    // .then(res => response.ok ? Promise.resolve(res) : Promise.reject(res))
    .then(res => res.json())
    .then(data => {
        console.log(data)
        const fragment=document.createDocumentFragment()
        for (let i = 0; i < data.length; i++) {
            console.log(data[i].categoria.id_categoria)
            const div=document.createElement('div')
            const cabezera = document.createElement('h5')
            const cuerpo =document.createElement('p')
<<<<<<< HEAD
            const img=document.createElement('img');img.width=200;img.height=200;
            const precio=document.createElement('p')
=======
            const img=document.createElement('img')
            const precio=document.createElement('p')
<<<<<<< HEAD
=======
            const boton =document.createElement('button')
>>>>>>> ff57c5604d1b7b8b75343c1e0ee3b2e1d3ad75e1
>>>>>>> dde1f623f7ab0cfe0e911323a11b773b5fc78fed
            cabezera.textContent = `${data[i].nombre_producto}`
            img.src= `${data[i].imagen}`
            precio.textContent=`${data[i].precio}€`
            cuerpo.textContent=`${data[i].marca} - ${data[i].color}`
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
            boton.id=`boton ${data[i].id_producto}`;boton.className="btn btn-primary"
            boton.textContent="Añadir"
>>>>>>> ff57c5604d1b7b8b75343c1e0ee3b2e1d3ad75e1
>>>>>>> dde1f623f7ab0cfe0e911323a11b773b5fc78fed
            div.className="sudaderasMujer"
            div.id=`ficha ${data[i].id_producto}`
            div.appendChild(cabezera)
            div.appendChild(cuerpo)
            div.appendChild(img)
            div.appendChild(precio)
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
            div.appendChild(boton)
>>>>>>> ff57c5604d1b7b8b75343c1e0ee3b2e1d3ad75e1
>>>>>>> dde1f623f7ab0cfe0e911323a11b773b5fc78fed
            fragment.appendChild(div)
        }
        caja.appendChild(fragment)
    })
    .catch(err=> console.log(`error: ${err.status}`))