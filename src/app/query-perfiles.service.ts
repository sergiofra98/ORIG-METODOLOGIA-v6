import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { URL } from './url';


@Injectable({
  providedIn: 'root'
})
export class QueryPerfilesService {

  public datosPerfiles: any;

  constructor(private http: HttpClient) {
  }

  getPerfiles(
    empleado: string) {
    return this.http.get(URL.direccion + '/ConsultaRiesgo/ValidacionPermisos', {
      params: {
        empleado: empleado
      }
    });
  }

  transmitirResultados(data) {
    this.datosPerfiles = data;
  }
}

