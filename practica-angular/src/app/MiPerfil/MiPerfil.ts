import {Component} from '@angular/core';
import { Prestamos } from '../prestamos/prestamos';
import { Cuenta } from '../cuenta/cuenta';
import { Transacciones } from '../transacciones/transacciones';

@Component({
    selector: 'mi-perfil',
    imports: [Prestamos, Cuenta, Transacciones],
    templateUrl: "MiPerfil.html",
    styleUrl: 'MiPerfil.css'
    
})

export class MiPerfil {

    public user: string;
    public id: string;
    public nombre: string;
    public edad: number;
    public ocupacion: string;
    public direccion: string;
    public mostrarCuenta: boolean = true;

    constructor() {
        this.user = "S3B45";
        this.id = "us-084577";
        this.nombre = "Sebastián Chamorro";
        this.edad = 18;
        this.ocupacion = "Desarrollador de Software";
        this.direccion = "Calle Falsa 123, Ciudad, País";


        console.log("MiPerfil component ha sido inicializado.");
        alert("Bienvenido al perfil, estás dentro de la aplicación.");
    }

    ngDoCheck() {
        console.log("MiPerfil component ha sido actualizado.");
    }
    cambiarEdad() {
        this.edad = 21;
    }
    cambiarDireccion() {
        this.direccion = "Avenida Siempre Viva 742, Ciudad, País";
    }
    ocultarCuenta(valor: boolean) {
        this.mostrarCuenta = valor;
    }
}