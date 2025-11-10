import { Component } from '@angular/core';
import { Transacciones } from '../transacciones/transacciones';

@Component({
  selector: 'app-prestamos',
  imports: [Transacciones],
  templateUrl: './prestamos.html',
  styleUrl: './prestamos.css',
})
export class Prestamos {
  web= "https://www.youtube.com"
  redirigir = true;

  prestamosList = [
    {id: 1, monto: 100, estado: "Aprobado", valor: true},
    {id: 2, monto: 200, estado: "Pendiente" , valor: false},
    {id: 3, monto: 300, estado: "Pendiente", valor: false},
    {id: 4, monto: 400, estado: "Aprobado", valor: true},
    {id: 5, monto: 500, estado: "Aprobado", valor: true},
    {id: 6, monto: 500, estado: "Pendiente", valor: false},
  ];

  prestamo = {
    id: 1,
    //tipo: "personal",
    //tipo: "hipotecario",
    tipo: "vehicular",
    interes: 5.5
  }

  cambiarRedirigir(){
    this.redirigir = !this.redirigir;
  }
}
