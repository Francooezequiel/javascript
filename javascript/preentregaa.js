// const shopContent = $(document).ready( () => document.getElementById("shopContent"))
const mercado = document.querySelector("#mercado")
const verCarrito = document.getElementById("verCarrito")
const headerContenedor = document.getElementById("header-contenedor")
const producto = [
    {id : 1,
    detalle : "\n 1-Whisky Blue Label",
    precio: 50000,
    imagen: "https://imgs.search.brave.com/cXGzHvpStYqecS_x_-RbowKAv8Y9WfGmuQoOTv4qZyY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDF2YUhWMXZGWkwu/anBn",
    
    },

    {id : 2, 
    detalle : "\n 2-Vodka Smirnoff", 
    precio: 3500,
    imagen : "https://imgs.search.brave.com/-wc32Zvuaf1PsmYkAJPBTMqwA29orJAXGO9XFzC6dgo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZ290b2xpcXVv/cnN0b3JlLmNvbS9w/cm9kdWN0LzEwMDAw/MDE4MjcvMGQ4ZWNk/ZjAtMTdiNi00MDFh/LTg1YWYtY2JiYzUz/MDIwOTc4XzM2MF9t/LmpwZw",
    },
    {id : 3, 
    detalle: "\n  3-Gin tonic Bombay",  
    precio: 12000,
    imagen : "https://imgs.search.brave.com/7V4tHX3FenP9v8aG6ricCFTFggnVDufP6Ef9HEKsNEo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjExK3A1d1lDSEwu/anBn",
    },
    {id : 4, 
    detalle : "\n 4-Ron Malibu ", 
    precio: 5000,
    imagen : "https://imgs.search.brave.com/AFMiDvPghAU7Phj-tO02b1iZgSjIFCyurg98ZiG0ASs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9kM3Vn/eWYyaHQ2YWVuaC5j/bG91ZGZyb250Lm5l/dC9zdG9yZXMvMDAx/LzE1MS84MDkvcHJv/ZHVjdHMvbWFsaWJ1/MS05ZDdkMDE3MjA5/NWZhYWQ4ZjQxNTg4/MTk0MDYzODA2OC0y/NDAtMC5qcGc",
    
    },

    
    
]

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

producto.forEach( (product) => {
let contenido = document.createElement("div");
contenido.classList.add("contenedor")
contenido.innerHTML = `
<div class="card-contenedor">
<img src="${product.imagen}">
<h3>${product.detalle}<h3>
<p>${product.precio}$<p>


`;

mercado.appendChild(contenido);


let boton = document.createElement("button")
boton.classList.add("contenedor-boton")
boton.innerText = "agregar"
boton.addEventListener("click",() =>{
    carrito.push(product)
    localStorage.setItem("carrito",JSON.stringify(carrito))

});
contenido.appendChild(boton)
} );

verCarrito.addEventListener("click", () => {


    const estructuraHeader = document.createElement("div")
    estructuraHeader.className = "estructuraHeader"
    estructuraHeader.innerHTML = `
    <h1 class ="header-title">Carrito</h1>
    `;
    headerContenedor.appendChild(estructuraHeader)
    
    const headerboton = document.createElement("button");
    headerboton.innerText = "comprar";
    headerboton.className = "header-boton"
    headerboton.addEventListener("click", () =>{
        carrito = [];
        headerContenedor.innerHTML = ""
    } )
    estructuraHeader.appendChild(headerboton)

    carrito.forEach((product) => {
        let carritoheader = document.createElement("div")
        carritoheader.className = "carrito-contenedor"
        carritoheader.innerHTML = `
        <img src="${product.imagen}">
        <h3>${product.detalle}<h3>
        <p>${product.precio}$<p>
        `;
        headerContenedor.appendChild(carritoheader)
    })

    const totalcarrito = carrito.reduce((acu ,producto) => acu +  producto.precio, 0);

    const totaal = document.createElement("div");
    totaal.className = "total-contenedor";
    totaal.innerHTML = `total : ${totalcarrito} `;
    headerContenedor.appendChild(totaal);
});
