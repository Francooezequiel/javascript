
let nombre =  prompt (" Ingrese su nombre ")
let cantidad = 0;
let opcion ;

    alert ("Hola bienvenido a BestDrink , "  + nombre );


const producto = [
    {id : 1 ,detalle : "\n 1-Whisky Blue Label",
     precio: 50000 },
    {id : 2, detalle : "\n 2-Vodka Smirnoff", 
    precio: 3500 },
    {id : 3, detalle: "\n  3-Gin tonic Bombay",  
    precio: 12000 },
    {id : 4, detalle : "\n 4-Ron Malibu ", 
    precio: 5000 },
    {id : 5, detalle : "\n 5-Vino Malbec Rutini",
    precio: 4750 },
    {id : 6, detalle : "\n 6-Ver Sacrum Blanco", 
    precio: 25000}
]


let comprar = prompt("Quiere ver nuestra lista de productos , si o no ");


while (comprar !== "si" && comprar !== "no") {
    alert ("Ingresa si o no ,Gracias")
    comprar = prompt("Quiere ver nuestra lista de productos , si o no ");
    }

if(comprar === "si"){
    alert ("Nuestro productos")
    let totaldeProductos = producto.map( (producto) => producto.detalle + " " + producto.precio + "$" 
    );
    let detalleDeCompra = prompt  (totaldeProductos.join(" "))
    let productoSeleccionado = producto.filter(p =>p.id == detalleDeCompra )[0]

    while (cantidad <= 0 || isNaN(cantidad)) {
        cantidad = prompt  (`seleccionaste :${productoSeleccionado.detalle} que cantidad desea Comprar?`)
        alert (" Elegiste la cantidad  de  "  +  cantidad )



    }
    alert ("total a pagar " + productoSeleccionado.precio * cantidad)
    const CostoDeEnvio = () => {
        if (productoSeleccionado.precio >= 10000)
        {alert ("El envio es gratis")
    } else { 
        (productoSeleccionado.precio < 10000)
        alert ("El costo del envio es de 1500")
        
    }
    } 
    CostoDeEnvio ()
    alert ("Su compra fue guardada con exito , a continuacion nuestra de lista de producto si desea terminar Escriba salir")
    producto =  prompt (" 1-Vodka $2800 2-Gin tonic $8700 3-Fernet $4200  4-Ron $1800 5-Ginebra $ 7500 , Si quiere terminar su comprar ingrese Salir")
    }
    






















// function calculadora (cantidad,precio) {
   // return cantidad * precio
    
    // }


    // if () {
    //     switch (producto) {
    //         case 1:
    //             cantidad = prompt ("Elegiste Blue Label, indique la cantidad")
    //             alert (" Total a pagar " + calculadora (cantidad , 50000) )
    //             precio = calculadora (cantidad, 50000)
                
    //             break;
    
    //             case 2:
                
    //             break;
    
    //             case 3:
                
    //             break;
    
    //             case 4:
                
    //             break;
    
    //             case 5:
                
    //             break;
    
    //             case 6:
                
    //             break;
        
    //         default:
    //             break;
    //     }
    // }

    
    
