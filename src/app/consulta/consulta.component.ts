import { Component, OnInit, Pipe, PipeTransform, Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Formulario } from './clasesForm';
import { ConsultaInicialService } from '../consulta-inicial.service';
import { QueryPerfilesService } from '../query-perfiles.service';
import { ResultadosComponent } from '../resultados/resultados.component';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css'],
  providers: [ConsultaInicialService, QueryPerfilesService, DatePipe]
})
@Injectable()
export class ConsultaComponent implements OnInit {

  public form: Formulario;
  public resultadosConsulta: Array<any>;
  public usuario: string;
  public perfilEmpresas: Array<string>;

  // DECORAR PAGINA
  public mostrarResultados: boolean;
  public cargandoRes: boolean;

  constructor
    (private DP: DatePipe,
    private _consultaInicialService: ConsultaInicialService,
    private _QueryPerfilesService: QueryPerfilesService,
    private _ParamRouter: ActivatedRoute,
    private _Router: Router) {

    // INICIALIZA LOS DATOS
    this.form = new Formulario('', '', '', '', '');
    this.mostrarResultados = false;
    this.cargandoRes = false;
    this.resultadosConsulta = [];
    this.perfilEmpresas = [];
  }

  ngOnInit() {
    this._ParamRouter.params.forEach((params: Params) => {
      this.usuario = params['usuario'];
    });

    this.ConsultaEmpresas();
  }

  ConsultaEmpresas() {
    this._QueryPerfilesService.getPerfiles(this.usuario).subscribe(
      result => {
        Object.assign(this.perfilEmpresas, result);
      },
      error => {
        const mensajeError = <any>error;
        console.log(mensajeError);
      }
    );
  }

  iniciarConsulta() {
    const fechaString = this.DP.transform(this.form.fecha, 'dd/MM/yyyy');

    this.mostrarResultados = false;
    this.cargandoRes = true;

    this._consultaInicialService.getConsulta(
      this.form.nombre,
      this.form.apellidoPaterno,
      this.form.apellidoMaterno,
      this.form.empresa,
      this.form.nivelDeRiesgo,
      fechaString).subscribe(
        result => {
          Object.assign(this.resultadosConsulta, result);
          this.mostrarResultados = true;
          this.cargandoRes = false;
        },
        error => {
          const mensajeError = <any>error;
          console.log(mensajeError);
          this.cargandoRes = false;
        }
      );
  }
}
