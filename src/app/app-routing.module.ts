import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListaNotasComponent} from "../app/components/lista-notas/lista-notas.component";
import {HomeComponent} from "../app/components/home/home.component";
import {EdicionNotaComponent} from "../app/components/edicion-nota/edicion-nota.component";

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"listanotas",component:ListaNotasComponent},
  {path:"edicion/:id",component:EdicionNotaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
