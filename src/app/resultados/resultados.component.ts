import { Component, Input, OnInit } from '@angular/core';
import { saveAs } from 'file-saver/FileSaver';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css'],
})
export class ResultadosComponent implements OnInit {

  @Input() data: Array<any>;
  public resultadosPersona: any;

  @Input() mostrarResultados: boolean;
  @Input() cargandoRes: boolean;

  public mostrarMasInfo: boolean;
  public seleccionPersona: number;
  public selectorTab: number;

  constructor() {
    this.resultadosPersona = [];
    this.selectorTab = 0;
    this.seleccionPersona = -1;
    this.mostrarMasInfo = false;
  }

  ngOnInit() {
  }

  mostrarDatosPersona(num) {
    if (num !== undefined) {
      this.mostrarMasInfo = true;
      this.selectorTab = 0;
      this.seleccionPersona = num;
    }

  }

  downloadCSV() {
    let archivo: string;

    archivo = '"ID",Nombre,Apellido Paterno,Apellido Materno,Riesgo,Producto,Actividad,Canal de colocación,PEP,Estado \n';

    for (const i of this.data) {
      archivo += '=("' + i.datos.id + '"),' + i.datos.nombre + ',' + i.datos.apellidoPaterno + ',' +
        i.datos.apellidoMaterno + ',' + i.riesgo.riesgo + ',' + i.riesgo.producto + ',' +
        i.riesgo.actividad + ',' + i.riesgo.canColocacion + ',' + i.riesgo.pep + ',' + i.riesgo.estado + ' \n';
    }

    const blob = new Blob([archivo], { type: 'text/plain' });
    saveAs(blob, 'ReporteGenerado.csv');
  }


}
