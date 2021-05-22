import { Component, OnInit } from '@angular/core';
import {Notas} from "../../interfaces/notas";
import {ServicioNotaService} from "../../servicio-nota.service";


@Component({
  selector: 'app-lista-notas',
  templateUrl: './lista-notas.component.html',
  styleUrls: ['./lista-notas.component.scss']
})

export class ListaNotasComponent implements OnInit {
  lista:Array<Notas>=[];
  opcionEditar:number=0;
  idBoton:number=0;

  constructor(private servicio:ServicioNotaService) { }

  ngOnInit(): void {
    this.servicio.TomarNotas().subscribe(datos=>{
      if(datos!=null){
        for(let i=0;i<datos.length;i++){
          this.lista.push(datos[i]);
        }
      }
    });
  }

  EliminarNota(item:Notas) {
    const id=item.id;
    let index:number = this.lista.indexOf(item);
    this.lista.forEach((elemento)=> {
      if(elemento.id==id) this.lista.splice(index,1);
    });
    this.servicio.GuardarDatos(this.lista).subscribe(datos=>{
    });
  }

  NotaEditar(idEditar:number,numero:number){
    this.servicio.Edicion(idEditar);
    this.opcionEditar=numero;
    this.idBoton=idEditar;
  }
}
