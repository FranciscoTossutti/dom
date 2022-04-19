

class Producto {
    constructor(nombre, precio, id, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.id = id;
        this.stock = stock;
        
    }
}

let productos = [];

productos.push(new Producto("Televisores",79,123,true));
productos.push(new Producto("Auriculares",29,1234,true));
productos.push(new Producto("Parlantes",69,12345,true));
productos.push(new Producto("Monitores",129,123456,true));
productos.push(new Producto("Buds",19,1234567,false));

console.log(productos);

alert(`Lista de productos: \n \n-${productos[0].nombre}\n
-${productos[1].nombre}\n
-${productos[2].nombre}\n
-${productos[3].nombre}\n
-${productos[4].nombre}`);

function buscarProducto(item, producto){
    return item.find(objeto => objeto.nombre === producto);
}

for (let index = 0; index < 4; index++) {
    let busqueda = buscarProducto(productos, prompt('Ingresar producto'));
    let contenedor = document.createElement("div");
    if(busqueda != undefined){
        contenedor.innerHTML = `<h3> Producto: ${busqueda.nombre}</h3>
                        <p>  Stock: ${busqueda.stock}</p>
                        <b> $${busqueda.precio}</b>`;
        document.body.append(contenedor);
    }else{
        alert('No existe ese producto.');
    }
}
