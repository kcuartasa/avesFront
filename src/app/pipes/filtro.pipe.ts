import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 3) return value;
    const resultadoFiltro = [];
    for(const filtro of value){
      if (filtro.dsNombreComun.toLowerCase().indexOf(arg.toLowerCase()) > -1 || filtro.dsNombreCientifico.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultadoFiltro.push(filtro);
      };
    };
    return resultadoFiltro;
  }


}
