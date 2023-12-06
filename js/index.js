

//calculadora 

//funciones switch prompt - if else - se definen antes de realizarlas 

function sumar(){
    const numeroA = parseInt(prompt("ingrese primer numero"))
    const numeroB = parseInt(prompt("ingrese el otro numero"))
    const resultado = numeroA + numeroB
    alert(numeroA + " + " + numeroB + " = " + resultado)
 }

function restar(){
    const numeroA = parseInt(prompt("ingrese primer numero"))
    const numeroB = parseInt(prompt("ingrese el otro numero"))
    const resultado = numeroA - numeroB
    alert(numeroA + " - " + numeroB + " = " + resultado)
 }

function multiplicar(){
    const numeroA = parseInt(prompt("ingrese primer numero"))
    const numeroB = parseInt(prompt("ingrese el otro numero"))
    const resultado = numeroA * numeroB
    alert(numeroA + " * " + numeroB + " = " + resultado)
}
    
function dividir(){
    const numeroA = parseInt(prompt("ingrese primer numero"))
    const numeroB = parseInt(prompt("ingrese el otro numero"))
    const resultado = numeroA / numeroB
    alert(numeroA + " / " + numeroB + " = " + resultado)
    
}


//variable
let opcion = parseInt(prompt("Elija una opción:\n 1-sumar \n 2-restar \n 3-multiplicar \n 4-dividir \n 5-salir"))

while(opcion !== 5){

       /* const numeroA = parseInt(prompt("ingrese primer numero"))
        const numeroB = parseInt(prompt("ingrese el otro numero"))

        //let resultado = 0;*/



switch (opcion) {
    case 1:
        sumar()
    
        break;
       
    case 2:
        restar()
        break;
        
    case 3:
        multiplicar()
        break;

    case 4:
         dividir()
        break;
        
        default:
           alert("opcion incorrecta")
        break;
}


        opcion = parseInt(prompt("Elija una opción:\n 1-sumar \n 2-restar \n 3-multiplicar \n 4-dividir \n 5-salir"))

}

alert("Finalizando programa, enter para cerrar")
