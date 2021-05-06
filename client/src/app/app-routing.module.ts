import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Acá importamos los html de los componestes como import{ nombre_con_el_que_nos_vamos_a_referir_a_ellos}
import { LoginFormComponent } from './components/login-form/login-form.component';
import { UserFormComponent } from './components/user-form/user-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginFormComponent
  },
  {
    path: 'registro',
    component: UserFormComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
