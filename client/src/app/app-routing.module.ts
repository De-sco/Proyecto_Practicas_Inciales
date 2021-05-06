import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // Permite definir las rutas de la aplicacion


// Agregando todos los componenetes (los que estan en la carpeta 'components')
import { GameListComponent } from './components/game-list/game-list.component';
import { InicioComponent } from './components/inicio/inicio.component'; // Importando el componente de inicio 
import { ComentariosComponent } from './components/comentarios/comentarios.component';
import { EditarJuegoComponent } from './components/editar-juego/editar-juego.component';
import { BibliotecaJuegosComponent } from './components/biblioteca-juegos/biblioteca-juegos.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { UsuariosRegistradosComponent } from './components/usuarios-registrados/usuarios-registrados.component';
import { MasJuegosEnBibliotecaComponent } from './components/mas-juegos-en-biblioteca/mas-juegos-en-biblioteca.component';
import { MejorPromedioPorConsolaComponent } from './components/mejor-promedio-por-consola/mejor-promedio-por-consola.component';
import { JuegosPublicadosEnAnioComponent } from './components/juegos-publicados-en-anio/juegos-publicados-en-anio.component';
import { AgregarJuegoComponent } from './components/agregar-juego/agregar-juego.component';

// Cada ruta es un objeto
// Creando las rutas de la aplicacion, todas las rutas van a retornar el archivo html que esta en sus carpetas (las que se importaron arriba)

const routes: Routes = [
  {
    path: '',  // Si no le colocamos nada, esta sera la ruta inicial
    redirectTo: '/incio',
    pathMatch: 'full' // Como esta va a redirigir a otra pagina, hay que agregar este atributo
  },
  {
    path: 'inicio', // La que esta en el com ponenete inicio
    component: InicioComponent
  },
  {
    path: 'games', // La que esta en el com ponenete game list, mostrara la lista de todos los juegos cargados
    component: GameListComponent // Este sera el componenete que se a a renderizar
  }, 
  // {
  //   path: 'games/add', // Si se ingresa a esta ruta, se va a renderizar el GamaesFromComponent
  //   component: GameFormComponent
  // },
  {
    path: 'comentarios',  // La que esta en el com ponenete 'comentarios'
    component: ComentariosComponent
  },
  {
    path: 'editar_juego', // La que esta en el com ponenete 'editar-juego'
    component: EditarJuegoComponent
  },
  {
    path: 'biblioteca_juegos',  // La que esta en el com ponenete 'biblioteca-juegos'
    component: BibliotecaJuegosComponent
  },
  {
    path: 'perfil', // La que esta en el com ponenete 'perfil'
    component: PerfilComponent
  },
  {
    path: 'usuarios_registrados', // La que esta en el com ponenete 'usuarios-registrados'
    component: UsuariosRegistradosComponent 
  },
  {
    path: 'mas_juegos_en_biblioteca', // La que esta en el componente 'mas-juegos-en-biblioteca'
    component: MasJuegosEnBibliotecaComponent
  },
  {
    path: 'mejor_promedio_por_consola', // La que esta en el com ponenete 'mejor-promedio-por-consola'
    component: MejorPromedioPorConsolaComponent
  },
  {
    path: 'juegos_publicados_anio', // La que esta en el componente 'juegos-publicados-en-anio'
    component: JuegosPublicadosEnAnioComponent
  },
  {
    path: 'agregar_juego',  // La que esta en el com ponenete 'agregar-juego'
    component: AgregarJuegoComponent
  },
  // {
  //   path: 'games/edit/:id',
  //   component: GameFormComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
