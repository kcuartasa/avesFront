import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertaServicesService } from 'src/app/compartido/services/alerta-services.service';
import { AveBack } from 'src/app/modelo/ave';
import { AveService } from 'src/app/services/ave/ave.service';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.scss']
})
export class ConsultarComponent implements OnInit {

  aves: AveBack[];
  filtroConsulta: any = '';

  constructor(private readonly aveService: AveService, private readonly alertaServicio: AlertaServicesService) { }

  ngOnInit(): void {
    this.consultarAves();

  }

  consultarAves(): void {
    this.aveService.consultarAves().subscribe({
      next: (aves: AveBack[]) => {
        console.log(aves);
        this.aves = aves;
      },
      error: (error: HttpErrorResponse) => {
        this.alertaServicio.mostrarAlerta('Error', 'Ha surgido un error');
      }
    });
  }

  eliminarAve(id: string): void {
    this.aveService.eliminar(id).subscribe({
      next: () => {
        this.alertaServicio.mostrarAlerta('Alerta', 'Se ha eliminado correctamente');
        this.consultarAves();
      },
      error: (error: HttpErrorResponse) => {
        this.alertaServicio.mostrarAlerta('Error', 'Ha surgido un error');
      }
    });
  }


}
