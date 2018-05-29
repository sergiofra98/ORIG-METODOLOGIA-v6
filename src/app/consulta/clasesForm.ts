import { getLocaleDateTimeFormat } from '@angular/common';

export class Formulario {

    public fecha: number;

    constructor(
        public nombre: string,
        public apellidoPaterno: string,
        public apellidoMaterno: string,
        public empresa: string,
        public nivelDeRiesgo: string) {
            this.fecha = Date.now();
        }
}

