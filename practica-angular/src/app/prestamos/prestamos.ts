import { Component } from '@angular/core';

@Component({
  selector: 'app-prestamos',
  imports: [],
  templateUrl: './prestamos.html',
  styleUrl: './prestamos.css',
})
export class Prestamos {
  web= "https://www.youtube.com"
  redirigir = true;

  cambiarRedirigir(){
    this.redirigir = !this.redirigir;
  }
}
