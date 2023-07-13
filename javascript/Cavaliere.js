let nombre =  prompt (" Ingrese su nombre ")


    alert ("Hola bienvenido a BestDrink " + nombre );

    let producto =  prompt (" 1-Vodka $2800 2-Gin tonic $8700 3-Fernet $4200  4-Ron $1800 5-Ginebra $ 7500")
    let cantidad = 0;
    let precio = 0;
    
    function calculadora (cantidad,precio) {
        return cantidad * precio
        
        }
    
while (producto != "Salir") {

    switch (producto) {
        case "1":
            cantidad = prompt ("Elegiste Vodka , indique la cantidad")
            alert (" Total a pagar " + calculadora (cantidad , 2800) )
            precio = calculadora (cantidad, 2800)
            break;
    
            case "2":
                cantidad = prompt ("Elegiste Gin tonic , indique la cantidad")
                alert (" Total a pagar " + calculadora (cantidad , 8700) )
                precio = calculadora (cantidad, 8700)
            break;
    
            case "3":
                cantidad = prompt ("Elegiste Fernet, indique la cantidad")
                alert (" Total a pagar " + calculadora (cantidad , 4200) )
                precio = calculadora (cantidad, 4200)
            break;
    
            case "4":
                cantidad = prompt ("Elegiste Ron, indique la cantidad")
                alert (" Total a pagar " + calculadora (cantidad , 1800) )
                precio = calculadora (cantidad, 1800)
            break;
    
            case "5":
                cantidad = prompt ("Elegiste Ginebra , indique la cantidad")
                alert (" Total a pagar " + calculadora (cantidad , 7500) )
                precio = calculadora (cantidad, 7500)
            break;
    
        default: alert ("el dato ingresado es invalido")
            break;  
        
        
    }
    const CostoDeEnvio = () => {
        if (precio >= 10000)
        {alert ("El envio es gratis")
    } else { 
        (precio < 10000)
        alert ("El costo del envio es de 700")
        
    }
    } 
    CostoDeEnvio ()
    producto =  prompt (" 1-Vodka $2800 2-Gin tonic $8700 3-Fernet $4200  4-Ron $1800 5-Ginebra $ 7500 , Si quiere terminar su comprar ingrese Salir")
}
alert ("Gracias por su comprar ")