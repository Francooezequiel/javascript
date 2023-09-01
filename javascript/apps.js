class Producto {
    constructor(id,nombre,precio,descripcion,img){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.cantidad = 1
        this.descripcion = descripcion
        this.img = img
    }
    aumentarCantidad(){
        this.cantidad++
    }

    disminuirCantidad(){
        if(this.cantidad > 1){
            this.cantidad--
            return true
        }else{
            return false
        }
        
    }

}

class Carrito {
    constructor(){
        this.listaCarrito = [];
        this.totalCarrito = 0;
    }

    levantarStorage(){
        let listaCarritoJSON = localStorage.getItem("listaCarrito");
        this.listaCarrito = JSON.parse(listaCarritoJSON) || [];
    }

    guardarEnStorage(){
        let listaCarritoJSON = JSON.stringify(this.listaCarrito)
        localStorage.setItem("listaCarrito", listaCarritoJSON)
        
    }
    
    agregar(productoAgregar){
    let existeElProducto = this.listaCarrito.some(producto => producto.id == productoAgregar.id)
if(existeElProducto){
    let producto = this.listaCarrito.find(producto => producto.id == productoAgregar.id)
    producto.cantidad++
}else{
    this.listaCarrito.push(productoAgregar);
}
        
        
    }

    eliminar(productoEliminar){
        let producto = this.listaCarrito.find(producto => producto.id == productoEliminar.id)
        let indice = this.listaCarrito.indexOf(producto)
        this.listaCarrito.splice(indice,1)
    }

    mostrarProducto(){
        let contenedor_carrito = document.getElementById(`contenedor_carrito`)
        contenedor_carrito.innerHTML= ""
        this.listaCarrito.forEach(producto =>{
            contenedor_carrito.innerHTML +=`<div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
            <div class="col-md-4">
                <img src="${producto.img}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">Precio :$${producto.precio}</p>
                <p class="card-text">Cantidad :<button class="btn btn-primary" id="minus-${producto.id}"> <i class="fa-solid fa-minus"></i> </button> ${producto.cantidad} <button class="btn btn-primary" id="plus-${producto.id}"><i class="fa-solid fa-plus"></i></button></p>
                <button class="btn btn-danger" id="eliminar-${producto.id}"><i class="fa-solid fa-trash"></i></button>
                </div>
            </div>
            </div>
        </div>
            
            `
        });

        this.listaCarrito.forEach(producto =>{
        let finalizar_compras = document.getElementById("finalizar_compra")
        let btn_eliminar = document.getElementById(`eliminar-${producto.id}`)
        let btn_plus = document.getElementById(`plus-${producto.id}`);
        let btn_minus = document.getElementById(`minus-${producto.id}`);

        btn_eliminar.addEventListener("click", () =>{
        this.eliminar(producto)
        this.guardarEnStorage()
        this.mostrarProducto()
        })

        btn_plus.addEventListener("click", () =>{
            producto.aumentarCantidad()
            this.mostrarProducto()
        })

        btn_minus.addEventListener("click", () =>{
            producto.disminuirCantidad()
            this.mostrarProducto()
        })
        finalizar_compras.addEventListener("click", () =>{
            this.eventoFinalizarCompras();
        })

        
    });
        


        let total_paragraph = document.getElementById(`total`)
        total_paragraph.innerHTML = `Total: $ ${this.calcularTotal()}`;
    
    }
    eventoFinalizarCompras(){
        if(this.listaCarrito.length > 0) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Su Compra ha sido realizada con Exito!',
                showConfirmButton: false,
                timer: 2000
            }).then(() => {
                this.listaCarrito = [];
                localStorage.removeItem("listaCarrito")
                this.mostrarProducto();
            })
        }

        
    }
    
    calcularTotal(){
        return this.listaCarrito.reduce((acu, producto) => acu + producto.precio * producto.cantidad, 0);
    }
    
};





class ProductoController{
    constructor(){
        this.listaProducto = []
    }

    
    agregar(producto){
        this.listaProducto.push(producto)
    }
    async obtenerProductos(){
        const respuesta = await fetch("./javascript/apiproduc.json");
        const data = await respuesta.json();
        data.forEach( (elm) => {
            Object.setPrototypeOf(elm, Producto.prototype)

        })
        this.listaProducto = data;

        this.mostrarProducto() 
    }
    
    mostrarProducto(){
        let contenedor_productos = document.getElementById("contenedor_productos")
        this.listaProducto.forEach( producto => {
            contenedor_productos.innerHTML += `
            <div class="card" style="width: 18rem;">
            <img src="${producto.img}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">${producto.descripcion}</p>
            <p class="card-text">$${producto.precio}</p>
            <button class="btn btn-primary" id="ap-${producto.id}">Añadir al Carrito</button>
            </div>
            </div> 
            `
            
        });
        this.listaProducto.forEach(producto => {
            const btn = document.getElementById(`ap-${producto.id}`)
            
            btn.addEventListener("click", () => {
                carrito.agregar(producto)
                carrito.mostrarProducto()
                carrito.guardarEnStorage()
               
            })
        })
    }
    
}

const carrito = new Carrito()
carrito.levantarStorage();
carrito.mostrarProducto();
carrito.eventoFinalizarCompras()



// instanca de controlador de productos  gestiona todos los productos : mostrar ,calcular total ,eliminar
const controlador_productos = new ProductoController()



controlador_productos.mostrarProducto()
// api q muestra los productos
controlador_productos.obtenerProductos()

