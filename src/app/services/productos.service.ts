import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class ProductosService {
  productos:any[] = [];
  cargando:boolean =true;

  constructor( private http:Http) {
    this.cargar_productos();
   }
// funcion que recibe un parametro el id
public cargar_producto( cod :string ){
 // se regresa lo que es el observador
  return this.http.get('https://paginaweb-fd132.firebaseio.com/productos/'+cod+'.json');
}


   public cargar_productos(){
    this.cargando = true;
    this.http.get('https://paginaweb-fd132.firebaseio.com/productos_idx.json')
    .subscribe (res => {
      // console.log ( res.json() );

      setTimeout( ()=>{
        this.cargando = false;
        this.productos = res.json();
      },1500)
    });


   }

}
