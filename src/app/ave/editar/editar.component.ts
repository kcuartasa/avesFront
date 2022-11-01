import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { AlertaServicesService } from 'src/app/compartido/services/alerta-services.service';
import { AveBack } from 'src/app/modelo/ave';
import { AveService } from 'src/app/services/ave/ave.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {

  public form: FormGroup;
  id: string;

  constructor(private readonly aveService: AveService, private fb: FormBuilder, private readonly alertaServicio: AlertaServicesService, private rutaActiva: ActivatedRoute) { }


  ngOnInit(): void {

    this.form = this.fb.group({
      cdAve: ['',Validators.required],
      dsNombreComun: ['',Validators.required],
      dsNombreCientifico: ['',Validators.required]

    })

    this.rutaActiva.params.subscribe((params: Params) => {
      this.id = params['id'];
    })

    this.form.get('cdAve').disable();
    this.datosFormulario();
  }

  enviarFormulario(): void {
    this.aveService.editar(this.form.getRawValue()).subscribe({
      next: () => {
        this.alertaServicio.mostrarAlerta('Informacion', 'Se ha actualizado correctamente');
      },
      error: (error: HttpErrorResponse) => {
        this.alertaServicio.mostrarAlerta('Error', 'Ha surgido un error');
      }
    });
  }

  datosFormulario(): void {
    this.aveService.consultarAveId(this.id).subscribe({
      next: (ave: AveBack) => {
        this.form.setValue({
          cdAve: ave.cdAve,
          dsNombreComun: ave.dsNombreComun,
          dsNombreCientifico: ave.dsNombreCientifico
        })
      },
      error: (error: HttpErrorResponse) => {
        this.alertaServicio.mostrarAlerta('Error', 'Ha surgido un error');
      }
    });
  }

}
