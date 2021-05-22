import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Notas} from "../../interfaces/notas";
import {ServicioNotaService} from "../../servicio-nota.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  formulario:FormGroup;
  titulo:any;
  estado:any;
  descripcion:any;
  lista:Array<Notas>=[];
  generacionId:any;

  constructor(public fb:FormBuilder,private servicio:ServicioNotaService) {
    this.formulario=this.fb.group({
      titulo:["",[Validators.required]],
      estado:["",[Validators.required]],
      descripcion:["",[Validators.required,Validators.maxLength(150)]],
   });
   
  }

  ngOnInit(): void {
    this.titulo=this.formulario.get("titulo") as FormGroup;
    this.estado=this.formulario.get("estado") as FormGroup;
    this.descripcion=this.formulario.get("descripcion") as FormGroup;
    this.servicio.TomarNotas().subscribe(datos=>{
      if(datos!=null){
        for(let i=0;i<datos.length;i++){
          this.lista.push(datos[i]);
        }
      }
    });
  }

  Crear(){
    if(this.lista.length!=0){
      this.generacionId=this.lista[this.lista.length-1].id+1;
    }
    else{
      this.generacionId=1;
    }
    let nota:Notas={titulo:this.titulo.value,estado:this.estado.value,descripcion:this.descripcion.value,id:this.generacionId};
    this.lista.push(nota);
    this.servicio.GuardarDatos(this.lista).subscribe(datos=>{
    });
  }

  get inputs()
  {
      return this.formulario.controls;
  }
}
