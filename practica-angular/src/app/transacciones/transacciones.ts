import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { Transaccion } from '../Models/transaccion';
import { DatePipe } from '@angular/common';
import { Cuenta } from '../cuenta/cuenta';

@Component({
  selector: 'app-transacciones',
  imports: [NgClass, NgStyle, DatePipe, Cuenta],
  templateUrl: './transacciones.html',
  styleUrl: './transacciones.css',
})
export class Transacciones {
  public stilo: boolean = true;

  cambiarEstilo() {
    this.stilo = !this.stilo;
  }

  miEstilo={
    color: 'blue',
    fontWeight: 'bold',
    fontSize: '20px'
  }

  transacciones: Array<Transaccion> = [
    new Transaccion(1, new Date(2023, 5, 10), 'Salario', 3000, 'ingreso'),
    new Transaccion(2, new Date(2023, 5, 12), 'Alquiler', 1000, 'egreso'),
    new Transaccion(3, new Date(2023, 5, 15), 'Venta de coche', 5000, 'ingreso'),
    new Transaccion(4, new Date(2023, 5, 18), 'Compra de muebles', 1500, 'egreso'),
    new Transaccion(4, new Date(2023, 5, 18), 'Compra de muebles', 1800, 'ingreso'),
    new Transaccion(4, new Date(2023, 5, 18), 'Compra de muebles', 1500, 'egreso'),

  ]

}
