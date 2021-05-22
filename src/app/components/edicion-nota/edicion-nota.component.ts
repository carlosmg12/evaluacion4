import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Notas} from "../../interfaces/notas";
import {ServicioNotaService} from "../../servicio-nota.service";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edicion-nota',
  templateUrl: './edicion-nota.component.html',
  styleUrls: ['./edicion-nota.component.scss']
})
export class EdicionNotaComponent implements OnInit {
  formulario:FormGroup;
  titulo:any;
  estado:any;
  descripcion:any;
  ruta2:any;
  id:number=0;
  lista:Array<Notas>=[];
  nota:any;
  indice:number=0;
  constructor(public fb:FormBuilder,private ruta:ActivatedRoute,private servicio:ServicioNotaService) {
    this.formulario=this.fb.group({
      titulo:[this.servicio.notaEditable.titulo,[Validators.required]],
      estado:[this.servicio.notaEditable.estado,[Validators.required]],
      descripcion:[this.servicio.notaEditable.descripcion,[Validators.required,Validators.maxLength(150)]],
   });
   
  }

  ngOnInit(): void {
    this.ruta2=this.ruta.params.subscribe(parametros=>{
      this.id=parametros["id"];
    });
    this.servicio.TomarNotas().subscribe(datos=>{
      for(let i=0;i<datos.length;i++){
        this.lista.push(datos[i]);
        if(datos[i].id==this.id){
          this.nota=datos[i];
          this.indice=i;
        }
      }
    });
    
    this.titulo=this.formulario.get("titulo") as FormGroup;
    this.estado=this.formulario.get("estado") as FormGroup;
    this.descripcion=this.formulario.get("descripcion") as FormGroup;
    
  }
  
  Editar(){
    this.nota={titulo:this.titulo.value,estado:this.estado.value,descripcion:this.descripcion.value,id:this.id};
    this.lista[this.indice]=this.nota;
    this.servicio.GuardarDatos(this.lista).subscribe(datos=>{
    });
  }

  get inputs()
  {
      return this.formulario.controls;
  }

}


