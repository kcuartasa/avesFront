import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AveBack } from 'src/app/modelo/ave';

@Injectable({
  providedIn: 'root'
})
export class AveService {

  private backUrl: string = "http://localhost:8080/aves";

  constructor(private httpClient: HttpClient) { }

  guardar(ave: AveBack){
    return this.httpClient.post<AveBack>(this.backUrl,ave);
  }

  consultarAves(){
    return this.httpClient.get(this.backUrl);
  }

  eliminar(id: string){
    return this.httpClient.delete(`${this.backUrl}/${id}`);
  }

  editar(ave: AveBack){
    return this.httpClient.put<AveBack>(this.backUrl,ave);
  }

  consultarAveId(id: string){
    return this.httpClient.get<AveBack>(`${this.backUrl}/${id}`);
  }
}
