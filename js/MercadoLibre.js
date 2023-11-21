let inputBusqueda = document.getElementById("inputBusqueda");
let mainContent = document.getElementById("mainContent");

class Automovil {
    constructor(marca, modelo, imagen, precio, año, kilometraje, lugar) {
        this.marca = marca;
        this.modelo = modelo;
        this.imagen = imagen;
        this.precio = precio;
        this.año = año;
        this.kilometraje = kilometraje;
        this.lugar = lugar;
    }
}

let auto1 = new Automovil("Mazda 3", "2.5 Grand Touring",'imagenes/hola2.png', 98000000, 2021, 33000, 'Usaquén - Bogotá');
let auto2 = new Automovil("Mazda CX-30", "Grand Touring At", 'imagenes/hola3.jpg', 111000000, 2022, 14672, 'Engativa - Bogotá');
let auto3 = new Automovil('Toyota Prado', '3.0 Tx-l', 'imagenes/hola4.png', 275000000, 2020, 72000, 'El Poblado-Medellín-Antioquia');
let auto4 = new Automovil('Mercedes-benz', 'Clase C C200 1.5', 'imagenes/hola4.png', 211900000, 2022, 9300, 'Medellín-Antioquia');
let auto5 = new Automovil('Mazda', '2 Sedan', 'imagenes/hola5.jpg', 48500000, 255, 548545, 'Pitalito-Hila');


let autos = [auto1, auto2, auto3, auto4, auto5]

window.addEventListener("load", function () {

    mostrarProducto('');

    inputBusqueda.addEventListener('input', function () {
        mostrarProducto(inputBusqueda.value);
    });
});

function mostrarProducto(terminoBusqueda) {

    mainContent.innerHTML = '';
    autos.forEach(auto => {
        if (auto.marca.toLowerCase().includes(terminoBusqueda.toLowerCase()) || auto.modelo.toLowerCase().includes(terminoBusqueda.toLowerCase())) {

            // Caja para el producto
            let boxProducto = document.createElement("div");
            mainContent.appendChild(boxProducto);
            boxProducto.setAttribute("class", "box-producto");

            // Caja para la imagen
            let boxImg = document.createElement("div");
            boxProducto.appendChild(boxImg);
            boxImg.setAttribute("class", "box-img");

            let imgAuto = document.createElement('img');
            boxImg.appendChild(imgAuto);
            imgAuto.setAttribute('src', auto.imagen);
            imgAuto.setAttribute('class', 'img-auto')

            // Caja para la informacion
            let boxInfo = document.createElement("div");
            boxProducto.appendChild(boxInfo);
            boxInfo.setAttribute("class", "box-info");

            let marcaLabel = document.createElement('label');
            boxInfo.appendChild(marcaLabel);
            let textnodoMarca = document.createTextNode(auto.marca + " " + auto.modelo);
            marcaLabel.appendChild(textnodoMarca);
            marcaLabel.setAttribute('class', 'marca');

            //precio
            let precio = document.createElement('label');
            boxInfo.appendChild(precio);
            let precioStr = Intl.NumberFormat('de-DE').format(auto.precio)
            let textNodoPrecio = document.createTextNode("$" + precioStr);
            precio.appendChild(textNodoPrecio);
            precio.setAttribute('class', 'precio');

            let infExt = document.createElement('label');
            boxInfo.appendChild(infExt);
            let textNodoInfExt = document.createTextNode(auto.año + " · " + auto.kilometraje + " Km · " + auto.lugar);
            infExt.appendChild(textNodoInfExt);
            infExt.setAttribute('class', 'infExt');

        }
    });
}

