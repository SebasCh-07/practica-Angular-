export class Transaccion {
    constructor(
        public id: number,
        public fecha: Date,
        public descipcion: string,
        public monto: number,
        public tipo: 'ingreso' | 'egreso'
    ) {}
}