// importacion de la clase Cuenta
import {Cuenta} from "./Cuenta.js";

// declaracion de un objeto

var cu=new Cuenta();

// se guardan en variables los ids del formulario

var titular=document.getElementById("titular");
var cantidad=document.getElementById("cantidad");
var ingresar=document.getElementById("ingresar");
var retirar=document.getElementById("obtener");
var datos=document.getElementById("datos");
var resultado=document.getElementById("resultado");


//funcion para recoger datos de la persona
var nombreTitular=()=>{

    cu.setTitular = titular.value;

}

//presentar persona
datos.addEventListener('click',()=>{

    nombreTitular()
    if(cu.getCantidad<0){
        
        resultado.textContent=cu.presentar();
        resultado.style.color="red"; 
       
    }else{
    resultado.textContent=cu.presentar();
    resultado.style.color="black";
    }
});
//ingresar dinero en la cuenta en cantidad positiva

ingresar.addEventListener('click',()=>{

   var cantidadIngresada=parseFloat(cantidad.value);
    if(cantidadIngresada<0){
        alert("No se pueden ingresar numeros negativos en la cuenta");
    }else{

        nombreTitular();
        cu.ingreso(cantidadIngresada);
        
       
    }


})

//retirar dinero de la cuenta

retirar.addEventListener('click',()=>{

   var cantidadRestada=parseFloat(cantidad.value);

       nombreTitular();
       cu.obtener(cantidadRestada);



});
