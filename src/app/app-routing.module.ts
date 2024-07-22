import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { FormsModule } from '@angular/forms';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';

const routes: Routes = [
  { path: "", redirectTo: "/paginas/inicio", pathMatch: "full" },
  { path: "paginas/inicio", component: InicioComponent },
  { path: "paginas/iniciarSesion", component: IniciarSesionComponent },
  { path: "paginas/crearCuenta", component: CrearCuentaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
