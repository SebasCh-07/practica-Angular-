import { Routes } from '@angular/router';
import { MiPerfil } from './MiPerfil/MiPerfil';
import { Cuenta } from './cuenta/cuenta';
import { Transacciones } from './transacciones/transacciones';
import { Prestamos } from './prestamos/prestamos';
import { PaginaNoEncontrada } from './pagina-no-encontrada/pagina-no-encontrada';

export const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: MiPerfil },
  { path: 'cuenta', component: Cuenta },
  { path: 'transacciones', component: Transacciones },
  { path: 'prestamos', component: Prestamos },
  { path: '**', component: PaginaNoEncontrada },
];
