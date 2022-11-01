import { Component, OnInit } from '@angular/core';
import { AveService } from 'src/app/services/ave/ave.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertaServicesService } from 'src/app/compartido/services/alerta-services.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {

  public form: FormGroup;

  constructor(private readonly aveService: AveService, private fb: FormBuilder, private readonly alertaService: AlertaServicesService) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      dsNombreComun: ['',Validators.required],
      dsNombreCientifico: ['',Validators.required]

    })

  }

  enviarFormulario(): void {
    this.aveService.guardar(this.form.value).subscribe({
      next: () => {
        this.alertaService.mostrarAlerta('Alerta', 'Se ha guardado correctamente');
        this.form.reset();
      },
      error: (error: HttpErrorResponse) => {
        this.alertaService.mostrarAlerta('Error', 'Ha surgido un error');
      }
    });
    console.log("Se ha creado correctamente");
  }


}
