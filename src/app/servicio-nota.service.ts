import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Notas} from "./interfaces/notas";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServicioNotaService {
  url:string="http://localhost/evaluacion4/backend/";
  notaEditable:any;

  constructor(private servicio:HttpClient) { }

  GuardarDatos(lista:Array<Notas>):Observable<any>{
    return this.servicio.post(`${this.url}guardar.php`,JSON.stringify(lista));
   }

  TomarNotas():Observable<any>{
    return this.servicio.get(`${this.url}mostrar.php`);
   }
   
  Edicion(id:number){
    this.TomarNotas().subscribe(datos=>{
      if(datos!=null){
        for(let i=0;i<datos.length;i++){
          if(id==datos[i].id){
            this.notaEditable=datos[i];
          }
        }
      }
    });
  }
}
