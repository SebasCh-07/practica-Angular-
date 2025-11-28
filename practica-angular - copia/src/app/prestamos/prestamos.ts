import { Component } from '@angular/core';
import { UpperCasePipe, LowerCasePipe, TitleCasePipe, CurrencyPipe } from '@angular/common';
import { Transacciones } from '../transacciones/transacciones';
import { AscciPipe } from '../pipes/ascci';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-prestamos',
  imports: [Transacciones, UpperCasePipe, LowerCasePipe, TitleCasePipe , CurrencyPipe, AscciPipe, FormsModule],
  templateUrl: './prestamos.html',
  styleUrl: './prestamos.css',
})
export class Prestamos {
  web= "https://www.youtube.com"
  saludo = "HOLA"
  despedida = "adios"
  auto = "ford"
  cantidad = 123456789
  palbra = "hola"
redirigir = true

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
  public montoString: string = "";
  public estadoPrestamo: string = ""; 

  cambiarRedirigir(){
    this.redirigir = !this.redirigir;
  }

  eliminarPrestamo(index: number) {
    this.prestamosList.splice(index, 1);
  }
  addPrestamo() {
    let indicador = this.prestamosList[this.prestamosList.length - 1].id + 1;
    let nuevoPrestamo = {id: indicador, monto: parseInt(this.montoString), estado: this.estadoPrestamo, valor: false};
    this.prestamosList.push(nuevoPrestamo);
    console.log(this.prestamosList);
  }
}
