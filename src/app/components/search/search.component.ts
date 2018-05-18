import { Component } from '@angular/core';
import {ActivatedRoute } from "@angular/router";
import { ProductosService } from "../../services/productos.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  termino:string = undefined;

// se inyecta el servicio
  constructor(private route:ActivatedRoute,
              private _ps:ProductosService ) {
  route.params.subscribe( parametros=>{
  this.termino = parametros['termino'];
  _ps.buscar_producto( this.termino);
  console.log(this.termino);


  });
 }



}