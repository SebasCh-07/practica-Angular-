import {Component} from '@angular/core';

@Component({
    selector: 'mi-perfil',
    templateUrl: "MiPerfil.html",
    styleUrl: 'MiPerfil.css'
    
})

export class MiPerfil {

    public user: string;
    public id: string;
    public nombre: string;
    public edad: number;
    public ocupacion: string;

    constructor() {
        this.user = "S3B45";
        this.id = "us-084577";
        this.nombre = "Sebastián Chamorro";
        this.edad = 18;
        this.ocupacion = "Desarrollador de Software";


        console.log("MiPerfil component ha sido inicializado.");
        alert("Bienvenido al perfil, estás dentro de la aplicación.");
    }
}