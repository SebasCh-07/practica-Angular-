import { Component } from '@angular/core';

@Component({
  selector: 'app-cuenta',
  imports: [],
  templateUrl: './cuenta.html',
  styleUrl: './cuenta.css',
})
export class Cuenta {
  ngOnInit() {
    console.log('Cuenta component initialized');
  }
  ngOnDestroy() {
    console.log('Cuenta component destroyed');
  }
}
