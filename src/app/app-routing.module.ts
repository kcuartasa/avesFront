import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './ave/agregar/agregar.component';
import { ConsultarComponent } from './ave/consultar/consultar.component';
import { EditarComponent } from './ave/editar/editar.component';

const routes: Routes = [
  {path: 'agregar', component: AgregarComponent},
  {path: 'editar/:id', component: EditarComponent},
  {path: 'consultar', component: ConsultarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
