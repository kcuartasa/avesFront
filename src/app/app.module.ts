import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarComponent } from './ave/agregar/agregar.component';
import { EditarComponent } from './ave/editar/editar.component';
import { ConsultarComponent } from './ave/consultar/consultar.component';
import { FiltroPipe } from './pipes/filtro.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AgregarComponent,
    EditarComponent,
    ConsultarComponent,
    FiltroPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
