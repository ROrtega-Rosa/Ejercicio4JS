
export class Cuenta{


constructor(){

    this.cantidad=0;
}




  /**
    * @param función a la que se le pasa por parámetro el titular
    *  */ 
  set setTitular(titular){
    
    this.titular=titular;
    }
    /**
     * @return función que devuelve un dato de tipo string titular
     */
   get getTitular(){
    
    
        return this.titular;
    }

      /**
    * @param función a la que se le pasa por parámetro la cantidad
    *  */ 
   set setCantidad(cantidad){
    
    this.cantidad=cantidad;
    }
    /**
     * @return función que devuelve un dato de tipo number
     */
   get getCantidad(){
    
    
        return this.cantidad;
    }


    ingreso(cantidadIngresada){

       

        this.cantidad=cantidadIngresada+this.cantidad;
        
    }

    obtener(cantidadRestada){

        

        this.cantidad=this.cantidad-cantidadRestada;
        

    }

    presentar(){



        return "el titular "+this.titular+" mantiene en su cuenta "+this.cantidad+" € de saldo. ";
    }


}