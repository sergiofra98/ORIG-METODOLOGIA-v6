import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { URL } from './url';

@Injectable()
export class ConsultaInicialService {

  public datosConsulta: any;

  constructor(private http: HttpClient) { }

  getConsulta(
    nombre: string,
    apellidoPat: string,
    apellidoMat: string,
    empresa: string,
    riesgo: string,
    fecha: string) {
    return this.http.get(URL.direccion + '/ConsultaRiesgo/consultaInicial', {params: {
      nombre: nombre, apellido_pat: apellidoPat, apellido_mat: apellidoMat, empresa: empresa, riesgo: riesgo, fecha: fecha}});
    }

  transmitirResultados(data) {
    this.datosConsulta = data;
  }
}
