import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class ProductosService {
  productos:any[] = [];
  productos_filtrado:any[] = [];
  cargando:boolean =true;

  constructor( private http:Http) {
    this.cargar_productos();
   }

public buscar_producto( termino :string ){
//console.log("Buscando Producto");
//console.log(this.productos.length);

    // esperar q termine de cargar para llamar funcion filtar si no no trabaja corre
  if( this.productos.length === 0 ) {
    this.cargar_productos().then( ()=>{
      this.filtar_productos(termino);
      //termino la carga
    });
  ///
} else {
     this.filtar_productos(termino);
}
}
//
private filtar_productos(termino:string){
  this.productos_filtrado = [];
  termino = termino.toLowerCase(); // se convierte a minusculas
  this.productos.forEach( prod =>{
  //filtrar x categoria y termino , eñ titulo se convierte a minusculas x la sensibilidad de java
     if ( prod.categoria.indexOf( termino ) >=0 ||  prod.titulo.toLowerCase().indexOf( termino )  >=0 ) {
       this.productos_filtrado.push( prod );
       //console.log( prod );// se imprime los que coinciden
     }
   })
   }
// funcion que recibe un parametro el id
  public cargar_producto( cod :string ){
 // se regresa lo que es el observador
  return this.http.get('https://paginaweb-fd132.firebaseio.com/productos/'+cod+'.json');
}

   public cargar_productos(){
    this.cargando = true;
     let promesa = new Promise (( resolve,reject ) =>{

       this.http.get('https://paginaweb-fd132.firebaseio.com/productos_idx.json')
       .subscribe (res => {
         // console.log ( res.json() );
         //setTimeout( ()=>{
           this.cargando = false;
           this.productos = res.json();
           resolve();
        // },1500)
       });
     });
     return promesa;
   }
 }
