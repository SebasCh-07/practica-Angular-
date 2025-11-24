import { Component } from '@angular/core';
import { Cliente } from '../Models/cleinte';

@Component({
  selector: 'app-cuenta',
  imports: [],
  templateUrl: './cuenta.html',
  styleUrl: './cuenta.css',
})
export class Cuenta {
  cliente: Cliente = 
      new Cliente(1, 'Juan', 'Perez', 'juancitoP@gmail.com', 5000);

  ngOnInit() {
    console.log('Cuenta component initialized');
  }
  ngOnDestroy() {
    console.log('Cuenta component destroyed');
  }
}
