import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrl: './iniciar-sesion.component.css'
})
export class IniciarSesionComponent {
  constructor(private router: Router) { }

  redirigirAPagina(): void {
    this.router.navigate(['/paginas/inicio']);
  }
}
