const caja=document.getElementById("cajilla");

fetch('http://localhost:8080/producto/1')
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
            const img=document.createElement('img')
            const precio=document.createElement('p')
            cabezera.textContent = `${data[i].nombre_producto}`
            img.src= `${data[i].imagen}`
            precio.textContent=`${data[i].precio}€`
            cuerpo.textContent=`${data[i].marca} - ${data[i].color}`
            div.className="sudaderasHombre"
            div.id=`ficha ${data[i].id_producto}`
            div.appendChild(cabezera)
            div.appendChild(cuerpo)
            div.appendChild(img)
            div.appendChild(precio)
            fragment.appendChild(div)
        }
        caja.appendChild(fragment)
    })
    .catch(err=> console.log(`error: ${err.status}`))