import {Component} from '@angular/core';

@Component({
    selector: 'mi-perfil',
    templateUrl: "MiPerfil.html",
    styleUrl: 'MiPerfil.css'
    
})

export class MiPerfil {
    constructor() {
        console.log("MiPerfil component ha sido inicializado.");
        alert("Bienvenido al perfil, estás dentro de la aplicación.");
    }
}