import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertaServicesService {

  constructor() { }

  mostrarAlerta(titulo: string, mensaje: string): void {
    alert(`${titulo} - ${mensaje} `)
  }
}
